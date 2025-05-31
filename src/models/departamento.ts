import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Departamento = db.define('departamentos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: 'id_departamento',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
});
