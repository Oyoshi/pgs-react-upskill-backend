import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [InvoicesModule, EmployeesModule, AuthModule, UsersModule],
})
export class AppModule {}
