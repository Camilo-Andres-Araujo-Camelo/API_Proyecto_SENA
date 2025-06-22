import { DataTypes } from 'sequelize';
import { db } from '../utils/database';
const bcrypt = require('bcrypt');

export type IEmpleado = {
  id: string;
  tipoDocumento: string;
  password: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  sexo: string;
  direccion: string;
  telefono: string;
  email: string;
  roles: string[];
};

export const Empleado = db.define(
  'empleados',
  {
    id: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: false,
      field: 'id_empleado',
    },
    tipoDocumento: {
      type: DataTypes.ENUM('CC', 'TI', 'CE', 'PA'),
      allowNull: false,
      field: 'tipo_documento',
    },
    password: {
      type: DataTypes.STRING,
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
    fechaNacimiento: {
      type: DataTypes.DATEONLY, // solo la fecha (yyyy-mm-dd)
      allowNull: false,
      field: 'fecha_nacimiento',
    },
    sexo: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(150),
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
  },
  {
    hooks: {
      beforeCreate: (empleado: any, options) => {
        const { password } = empleado;
        const hash = bcrypt.hashSync(password, 10);
        empleado.password = hash;
      },
    },
    timestamps: false,
  }
);
