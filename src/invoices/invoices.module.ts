import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Invoice, Contact, Item } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice, Contact, Item])],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
