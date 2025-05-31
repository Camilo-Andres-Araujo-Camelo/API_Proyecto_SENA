import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Ruta = db.define('rutas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: 'id_ruta',
  },
  origen: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destino: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
