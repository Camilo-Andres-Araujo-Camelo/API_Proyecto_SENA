import { router as clientsRouter } from './clientes.routes';

export const routerApi = (app: any) => {
  app.use('/api/clientes', clientsRouter);
};
