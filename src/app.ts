//* Imports
import express from 'express';
import morgan from 'morgan';
import { routerApi } from './routes';

//* Settings
const app = express();
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

//* Middlewares
//? Middleware de Morgan para registrar solicitudes
app.use(morgan('dev')); // Ejecuta morgan en modo desarrollo
app.use(express.urlencoded({ extended: false })); // Middleware para analizar datos URL-encoded
app.use(express.json()); // Middleware para analizar datos JSON

//* Router
routerApi(app); // Llama a la función routerApi para configurar las rutas

//* Configuración del puerto
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
