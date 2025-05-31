import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Ciudad = db.define('ciudades', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: 'id_ciudad',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_departamento',
  },
});
