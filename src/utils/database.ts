import { Sequelize } from 'sequelize';

export const db = new Sequelize({
  database: 'proyecto_sena2',
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false, // Disable logging for cleaner output
});
