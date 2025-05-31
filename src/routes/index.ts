import { router as clientsRouter } from './clientes.routes';
import { router as empleadosRouter } from './empleados.routes';
import { router as authRouter } from './auth.routes';
import { authenticate } from '../middlewares/auth.middleware';

export const routerApi = (app: any) => {
  app.use('/api/clientes', authenticate, clientsRouter);
  app.use('/api/empleados', authenticate, empleadosRouter);
  app.use('/api/auth', authRouter);
};
