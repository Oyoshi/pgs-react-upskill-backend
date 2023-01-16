import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [InvoicesModule, EmployeesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
