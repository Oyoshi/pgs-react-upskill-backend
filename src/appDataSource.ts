import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Invoice, Contact, Item } from './invoices/entities';
import {
  InvoicesFactory,
  ContactsFactory,
  ItemsFactory,
  InvoicesSeeder,
} from './invoices/factories';
import { Employee } from './employees/entities';
import { EmployeesFactory, EmployeesSeeder } from './employees/factories';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: 'all',
  entities: [Invoice, Contact, Item, Employee],
  migrations: [],
  factories: [InvoicesFactory, ContactsFactory, ItemsFactory, EmployeesFactory],
  seeds: [InvoicesSeeder, EmployeesSeeder],
};

export const postgresDataSource = new DataSource(options);
