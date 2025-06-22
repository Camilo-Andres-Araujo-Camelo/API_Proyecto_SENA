import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Viaje = db.define(
  'viajes',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: 'id_viaje',
    },
    idRuta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_ruta',
    },
    fechaProgramada: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_programada',
    },
    horaSalida: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'hora_salida',
    },
    horaLlegada: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'hora_llegada',
    },
    latitud: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitud: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    placaVehiculo: {
      type: DataTypes.STRING(6),
      allowNull: false,
      field: 'placa_vehiculo',
    },
    estado: {
      type: DataTypes.ENUM('Programado', 'En curso', 'Finalizado', 'Cancelado'),
      allowNull: false,
      defaultValue: 'Programado',
    },
  },
  {
    timestamps: false,
  }
);
