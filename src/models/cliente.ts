import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export type ICliente = {
  id: string;
  tipoDocumento: string;
  sexo: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  direccion: string;
  telefono: string;
  email: string;
  fechaRegistro: string;
};

export const Cliente = db.define(
  'clientes',
  {
    id: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: false,
      field: 'id_cliente',
    },
    tipoDocumento: {
      type: DataTypes.ENUM('CC', 'TI', 'CE', 'PA'),
      allowNull: false,
      field: 'tipo_documento',
    },
    sexo: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    nombres: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY, // solo la fecha (yyyy-mm-dd)
      allowNull: false,
      field: 'fecha_nacimiento',
    },
    fechaRegistro: {
      type: DataTypes.DATE, // incluye fecha y hora (timestamp)
      allowNull: false,
      field: 'fecha_registro',
      defaultValue: DataTypes.NOW, // valor por defecto es la fecha actual
    },
  },
  {
    timestamps: false,
  }
);
