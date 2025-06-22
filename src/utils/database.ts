import { Sequelize } from 'sequelize';

export const db = new Sequelize({
  database: process.env.DB_NAME || 'proyecto_sena2',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  logging: false, // Disable logging for cleaner output
});
