import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const VehiculoConductor = db.define(
  'vehiculos_conductores',
  {
    placaVehiculo: {
      type: DataTypes.STRING(6),
      primaryKey: true,
      allowNull: false,
      field: 'placa_vehiculo',
    },
    idEmpleado: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: false,
      field: 'id_empleado',
    },
    fechaAsignacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_asignacion',
    },
  },
  {
    timestamps: false,
  }
);
