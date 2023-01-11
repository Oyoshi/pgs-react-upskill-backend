import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async getInvoices() {
    return await this.invoicesService.getInvoices();
  }

  @Get(':id')
  async getInvoice(@Param('id') invoiceId: string) {
    return await this.invoicesService.getInvoice(invoiceId);
  }

  @Post()
  async createInvoice(@Body() invoice: CreateInvoiceDto) {
    return await this.invoicesService.createInvoice(invoice);
  }

  @Delete(':id')
  async deleteInvoice(@Param('id') invoiceId: string) {
    return await this.invoicesService.deleteInvoice(invoiceId);
  }
}
