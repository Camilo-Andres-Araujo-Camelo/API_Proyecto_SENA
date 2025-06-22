//* Imports
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routerApi } from './routes';
import { db } from './utils/database';
import { initModels } from './models/initModels';
import dotenv from 'dotenv';
dotenv.config();

//* Settings
const app = express();
app.set('port', process.env.PORT || 3000); // Configuracion del puerto del servidor
const PORT = app.get('port');

//* Inicializar modelos y sincronizar la base de datos
initModels(); // Llama a la función initModels para inicializar los modelos
// db.sync({ force: true }) //* elimina tablas existentes y las vuelve a crear

db.sync()
  .then(() => console.log('base de datos sincronizada'))
  .catch((error) => console.log(error));

//* Middlewares
//? Middleware de Morgan para registrar solicitudes
app.use(morgan('dev')); // Ejecuta morgan en modo dev
app.use(cors()); // Middleware para habilitar CORS
app.use(express.urlencoded({ extended: false })); // Middleware para analizar datos URL-encoded
app.use(express.json()); // Middleware para analizar datos JSON

//* Router
routerApi(app); // Llama a la función routerApi para configurar las rutas

//* Server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
