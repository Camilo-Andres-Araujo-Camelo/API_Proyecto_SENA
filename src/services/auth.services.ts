import { Empleado as EmpleadoDb } from '../models/empleado';
import crypto from 'crypto';

import { Role as RoleDb } from '../models/role';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export class AuthServices {
  public static SECRET_KEY = 'holamundoxxxx'; // Genera una clave secreta aleatoria

  static login = async (email: string, password: string) => {
    try {
      const empleadoDb = await EmpleadoDb.findOne({
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: RoleDb,
          as: 'roles',
          attributes: ['nombre'],
          through: {
            attributes: [], // Excluye los atributos de la tabla intermedia
          },
        },
      });
      if (empleadoDb) {
        const isValid = bcrypt.compareSync(password, empleadoDb.password);
        return isValid ? { isValid, empleadoDb } : { isValid };
      }
    } catch (error) {
      throw error; // Propaga el error para manejarlo en el controlador
    }
  };

  static genToken(data: any) {
    try {
      const token = jwt.sign(data, AuthServices.SECRET_KEY, {
        expiresIn: '60m',
        algorithm: 'HS512',
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}
