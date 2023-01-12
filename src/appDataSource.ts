import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Invoice } from './invoices/entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: 'all',
  entities: [Invoice],
  migrations: [],
});
