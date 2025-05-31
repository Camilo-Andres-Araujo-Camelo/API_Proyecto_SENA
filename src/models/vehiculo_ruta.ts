import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const VehiculoRuta = db.define('vehiculos_rutas', {
  placaVehiculo: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
    field: 'placa_vehiculo',
  },
  idRuta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'id_ruta',
  },
});
