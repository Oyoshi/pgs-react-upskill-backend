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
import { CreateInvoiceDto, GetInvoiceDto, UpdateInvoiceDto } from './dtos';

@ApiTags('Invoices')
@Controller('api/invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async find(): Promise<GetInvoiceDto[]> {
    return await this.invoicesService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.invoicesService.findOne(id);
  }

  @Post()
  async create(@Body() invoice: CreateInvoiceDto) {
    return await this.invoicesService.create(invoice);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() invoice: UpdateInvoiceDto) {
    return await this.invoicesService.update(id, invoice);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.invoicesService.delete(id);
  }
}
