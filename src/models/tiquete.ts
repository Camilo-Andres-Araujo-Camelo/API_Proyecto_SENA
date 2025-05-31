import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Tiquete = db.define('tiquetes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: 'id_tiquete',
  },
  noSilla: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'no_silla',
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2), // hasta 10 dígitos, 2 decimales
    allowNull: false,
  },
  idViaje: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    field: 'id_viaje',
  },
  idCliente: {
    type: DataTypes.STRING(15),
    allowNull: false,
    field: 'id_cliente',
  },
  idFactura: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_factura',
  },
});
