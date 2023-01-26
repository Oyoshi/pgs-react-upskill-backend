import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { InvoicesModule } from './invoices/invoices.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { postgresDataSourceOptions } from './appDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(postgresDataSourceOptions),
    InvoicesModule,
    EmployeesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
