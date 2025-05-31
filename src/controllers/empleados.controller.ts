import { IEmpleado } from '../models/empleado';
import { EmpleadosServices } from '../services/empleados.services';

export const getEmpleados = async (req: any, res: any) => {
  try {
    const result = await EmpleadosServices.getEmpleados();
    res.status(200).json({
      message: 'Empleados obtenidos correctamente',
      total: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const getEmpleadoById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const result = await EmpleadosServices.getEmpleadoById(id);
    if (!result) {
      //! Respuesta 404 - Empleado no encontrado
      return res.status(404).json({
        message: `Error: Empleado con ID: ${id} no encontrado`,
      });
    }
    //* Respuesta 200 - Empleado encontrado
    res.status(200).json({
      message: `Empleado con ID: ${id} encontrado`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const createEmpleado = async (req: any, res: any) => {
  try {
    const {
      id,
      tipoDocumento,
      password,
      nombres,
      apellidos,
      fechaNacimiento,
      sexo,
      direccion,
      telefono,
      email,
      role, // roles es opcional, se puede dejar vacío
    }: any = req.body;

    if (
      !id ||
      !tipoDocumento ||
      !password ||
      !nombres ||
      !apellidos ||
      !fechaNacimiento ||
      !sexo ||
      !direccion ||
      !telefono ||
      !email ||
      !role // Verifica si roles tiene al menos un elemento
    ) {
      return res.status(400).json({
        message: 'Todos los campos son obligatorios',
        camposRequeridos: [
          'id: string',
          'tipoDocumento: string',
          'password: string',
          'nombres: string',
          'apellidos: string',
          'fechaNacimiento: string',
          'sexo: string',
          'direccion: string',
          'telefono: string',
          'email: string',
          'role: string',
        ],
      });
    }

    const newEmpleado = {
      id,
      tipoDocumento,
      password,
      nombres,
      apellidos,
      fechaNacimiento,
      sexo,
      direccion,
      telefono,
      email,
      role,
    };

    const result = await EmpleadosServices.createEmpleado(newEmpleado);
    res.status(201).json({
      message: 'Empleado creado correctamente',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const updateEmpleadoById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const updatedEmpleado: IEmpleado = req.body;

    const result = await EmpleadosServices.updateEmpleadoById(
      id,
      updatedEmpleado
    );
    if (!result) {
      return res.status(404).json({
        message: `Error: Empleado con ID: ${id} no encontrado`,
      });
    }

    res.status(200).json({
      message: `Empleado con ID: ${id} actualizado correctamente`,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};

export const deleteEmpleadoById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const result = await EmpleadosServices.deleteEmpleadoById(id);
    if (!result) {
      return res.status(404).json({
        message: `Error: Empleado con ID: ${id} no encontrado`,
      });
    }
    res.status(200).json({
      message: `Empleado con ID: ${id} eliminado correctamente`,
    });
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};
