import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { InvoicesModule } from './invoices/invoices.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { postgresDataSourceOptions } from './appDataSource';
import { runSeeders } from 'typeorm-extension';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => postgresDataSourceOptions,
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        runSeeders(dataSource);
        return dataSource;
      },
    }),
    InvoicesModule,
    EmployeesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
