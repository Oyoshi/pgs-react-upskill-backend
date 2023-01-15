import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [InvoicesModule, EmployeesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
