import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const EmpleadoRole = db.define('empleados_roles', {
  idEmpleado: {
    type: DataTypes.STRING(15),
    primaryKey: true,
    allowNull: false,
    field: 'id_empleado',
    references: {
      model: 'empleados', // Nombre real de la tabla en la BD
      key: 'id_empleado', // Campo de referencia en la tabla empleados
    },
    onDelete: 'CASCADE',
  },
  idRole: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'id_rol',
    references: {
      model: 'roles', // Nombre real de la tabla en la BD
      key: 'id_rol', // Campo de referencia en la tabla roles
    },
    onDelete: 'CASCADE',
  },
});
