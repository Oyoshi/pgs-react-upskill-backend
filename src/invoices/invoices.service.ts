import { Injectable } from '@nestjs/common';
import { GetInvoiceDto, CreateInvoiceDto, UpdateInvoiceDto } from './dtos';
import { Invoice } from './entities';
import { AppDataSource } from '../appDataSource';

@Injectable()
export class InvoicesService {
  private invoicesRepository = AppDataSource.getRepository(Invoice);

  async find(): Promise<GetInvoiceDto[]> {
    return await this.invoicesRepository.find();
  }

  //async findOne(invoiceId: string): Promise<GetInvoiceDto> {
  //}

  async createInvoice(invoice: CreateInvoiceDto): Promise<GetInvoiceDto> {
    return await this.invoicesRepository.save(invoice);
  }

  //async updateInvoice(
  //  invoiceId: string,
  //  invoice: UpdateInvoiceDto,
  //): Promise<GetInvoiceDto[]> {
  //}

  // TODO - return nothing
  //async deleteInvoice(invoiceId: string): Promise<GetInvoiceDto[]> {
  //}
}
