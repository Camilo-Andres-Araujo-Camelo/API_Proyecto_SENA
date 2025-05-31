import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Factura = db.define('facturas', {
  idFactura: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    field: 'id_factura',
  },
  idCliente: {
    type: DataTypes.STRING(15),
    allowNull: false,
    field: 'id_cliente',
  },
  total: {
    type: DataTypes.DECIMAL(10, 2), // hasta 10 dígitos, 2 decimales
    allowNull: false,
  },
  fechaEmision: {
    type: DataTypes.DATE, // incluye fecha y hora (timestamp)
    allowNull: false,
    field: 'fecha_emision',
  },
  pagado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // por defecto no está pagada
  },
});
