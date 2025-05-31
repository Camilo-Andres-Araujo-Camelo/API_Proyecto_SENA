import { IEmpleado } from '../models/empleado';
import { Empleado as EmpleadoDb } from '../models/empleado';
import { Role as RoleDb } from '../models/role';
import { EmpleadoRole as EmpleadoRoleDb } from '../models/empleado_role';

export class EmpleadosServices {
  static async getEmpleados() {
    try {
      const result = await EmpleadoDb.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: RoleDb,
          as: 'roles',
          attributes: ['nombre'],
          through: { attributes: [] },
        },
      });
      return result.map((empleado) => empleado.toJSON());
    } catch (error) {
      throw error;
    }
  }

  static getEmpleadoById = async (id: string) => {
    try {
      const result = await EmpleadoDb.findByPk(id, {
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (!result) {
        return null; // Empleado no encontrado
      }
      return result.toJSON();
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static createEmpleado = async (empleado: any) => {
    const { role, ...datosEmpleado } = empleado;

    try {
      // 1. Crear el empleado
      const createdEmpleado = await EmpleadoDb.create(datosEmpleado);

      // 2. Buscar el rol por nombre
      const existingRole: any = await RoleDb.findOne({
        where: { nombre: role },
        attributes: {
          include: ['id'],
          exclude: ['createdAt', 'updatedAt'],
        },
      });
      if (!existingRole) {
        throw new Error(`Rol con nombre ${role} no encontrado`);
      }
      // 3. Asociar el empleado con el rol
      await EmpleadoRoleDb.create({
        idRole: existingRole.id,
        idEmpleado: createdEmpleado.id,
      });

      // 4. Retornar el empleado con roles (opcional)
      const empleadoConRoles = await EmpleadoDb.findByPk(createdEmpleado.id, {
        include: {
          model: RoleDb,
          as: 'roles',
          attributes: ['nombre'],
          through: { attributes: [] },
        },
      });

      return empleadoConRoles?.toJSON();
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static updateEmpleadoById = async (
    id: string,
    updatedEmpleado: IEmpleado
  ) => {
    try {
      const existingEmpleado = await EmpleadoDb.findByPk(id, {
        include: {
          model: RoleDb,
          as: 'roles',
          attributes: ['nombre'],
          through: { attributes: [] },
        },
      });
      if (!existingEmpleado) {
        return null; // Empleado no encontrado
      }
      // Actualiza los campos del empleado existente
      Object.assign(existingEmpleado, updatedEmpleado);
      // Guarda los cambios en la base de datos
      const savedEmpleado = await existingEmpleado.save();
      return savedEmpleado.toJSON(); // Retorna el empleado actualizado
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static deleteEmpleadoById = async (id: string) => {
    return EmpleadoDb.destroy({
      where: { id },
    })
      .then((result) => {
        if (result === 0) {
          return null; // Cliente no encontrado
        }
        return { message: `Cliente con ID: ${id} eliminado correctamente` };
      })
      .catch((error) => {
        throw error; // Propaga el error para manejarlo en el controlador
      });
  };
}
