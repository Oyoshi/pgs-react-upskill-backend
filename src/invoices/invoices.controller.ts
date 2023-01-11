import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

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
}
