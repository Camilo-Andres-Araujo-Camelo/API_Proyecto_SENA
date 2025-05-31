import { AuthServices } from '../services/auth.services';
const jwt = require('jsonwebtoken');

export const authenticate = (req: any, res: any, next: any) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.replace('Bearer ', '');
    try {
      const payload = jwt.verify(token, AuthServices.SECRET_KEY, 'HS512');
      req.user = payload; // Guarda el payload en la solicitud para usarlo más adelante
      next();
    } catch (error) {
      res.status(401).json({
        error: 'Token no válido',
        message: 'Enviar un token correcto',
      });
    }
  } else {
    res.status(498).json({ message: 'Token no enviado' });
  }
};

export const authorizeRole = (req: any, res: any, next: any) => {
  const autorizedRoles = ['Administrador'];
  const user = req.user;
  if (!user || !user.role || !autorizedRoles.includes(user.role)) {
    return res.status(403).json({
      error: 'Acceso denegado',
      message: 'No tienes permiso para acceder a este recurso',
    });
  }
  next();
};
