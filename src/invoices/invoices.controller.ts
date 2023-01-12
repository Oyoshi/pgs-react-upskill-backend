import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dtos';

@ApiTags('Invoices')
@Controller('api/invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async find() {
    return await this.invoicesService.find();
  }

  // @Get(':id')
  // async findOneById(@Param('id') invoiceId: string) {
  //   return await this.invoicesService.findOneById(invoiceId);
  // }

  @Post()
  async createInvoice(@Body() invoice: CreateInvoiceDto) {
    return await this.invoicesService.createInvoice(invoice);
  }

  //@Put(':id')
  //async updateInvoice(
  //  @Param('id') invoiceId: string,
  //  @Body() invoice: UpdateInvoiceDto,
  //) {
  //  return await this.invoicesService.updateInvoice(invoiceId, invoice);
  //}
  //
  //@Delete(':id')
  //async deleteInvoice(@Param('id') invoiceId: string) {
  //  return await this.invoicesService.deleteInvoice(invoiceId);
  //}
}
