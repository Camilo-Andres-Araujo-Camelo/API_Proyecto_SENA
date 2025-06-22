import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Vehiculo = db.define(
  'vehiculos',
  {
    placa: {
      type: DataTypes.STRING(6),
      primaryKey: true,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM('Automovil', 'Camioneta', 'Bus', 'Miniban'),
      allowNull: false,
    },
    linea: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idConductor: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'id_conductor',
    },
  },
  {
    timestamps: false,
  }
);
