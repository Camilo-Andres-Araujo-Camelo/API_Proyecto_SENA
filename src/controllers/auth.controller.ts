import { AuthServices } from '../services/auth.services';

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: 'Datos faltantes',
        message: 'Email no enviado',
      });
    }
    if (!password) {
      return res.status(400).json({
        error: 'Datos faltantes',
        message: 'Password no enviada',
      });
    }
    const result = await AuthServices.login(email, password);
    if (result?.isValid) {
      const { nombres, id, email, roles } = result.empleadoDb;
      const role = roles[0]?.dataValues?.nombre;
      const empleadoData: any = { nombres, id, email, role };
      const token = await AuthServices.genToken(empleadoData);
      empleadoData.token = token;
      res.json(empleadoData);
    } else {
      res.status(400).json({
        error: 'Error de autenticación',
        message: 'Empleado o password inválidos',
      });
    }
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error ? error.message : 'Un error desconocido ocurrió',
    });
  }
};
