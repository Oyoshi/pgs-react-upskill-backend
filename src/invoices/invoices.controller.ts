import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvoicesService } from './invoices.service';
import {
  CreateInvoiceDto,
  GetAllInvoicesDto,
  GetInvoiceDto,
  UpdateInvoiceDto,
} from './dtos';

@ApiTags('Invoices')
@Controller('api/invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async find(
    @Query('name') invoiceName?: string,
  ): Promise<GetAllInvoicesDto[]> {
    return await this.invoicesService.find(invoiceName);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GetInvoiceDto> {
    return await this.invoicesService.findOne(id);
  }

  @Post()
  async create(@Body() invoice: CreateInvoiceDto): Promise<GetInvoiceDto> {
    return await this.invoicesService.create(invoice);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() invoiceUpd: UpdateInvoiceDto,
  ): Promise<GetInvoiceDto> {
    return await this.invoicesService.update(id, invoiceUpd);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.invoicesService.delete(id);
  }
}
