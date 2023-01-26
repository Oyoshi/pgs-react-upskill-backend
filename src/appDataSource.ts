import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Invoice, Contact, Item } from './invoices/entities';
import { User } from './users/entities';
import { Employee } from './employees/entities';
import {
  InvoicesFactory,
  ContactsFactory,
  ItemsFactory,
  InvoicesSeeder,
} from './invoices/factories';
import { UsersSeeder } from './users/factories';
import { EmployeesFactory, EmployeesSeeder } from './employees/factories';

export const postgresDataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: 'all',
  entities: [Invoice, Contact, Item, User, Employee],
  migrations: [],
  factories: [InvoicesFactory, ContactsFactory, ItemsFactory, EmployeesFactory],
  seeds: [InvoicesSeeder, EmployeesSeeder, UsersSeeder],
};

export const postgresDataSource = new DataSource(postgresDataSourceOptions);
