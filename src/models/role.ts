import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Role = db.define(
  'roles',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'id_rol',
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);
