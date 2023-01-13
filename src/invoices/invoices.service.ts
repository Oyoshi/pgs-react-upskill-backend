import { Injectable, NotFoundException } from '@nestjs/common';
import { GetInvoiceDto, CreateInvoiceDto, UpdateInvoiceDto } from './dtos';
import { Invoice } from './entities';
import { AppDataSource } from '../appDataSource';

@Injectable()
export class InvoicesService {
  private invoicesRepository = AppDataSource.getRepository(Invoice);

  async find(): Promise<GetInvoiceDto[]> {
    return await this.invoicesRepository.find();
  }

  async findOne(id: string): Promise<GetInvoiceDto> {
    const invoice = await this.invoicesRepository.findOneBy({ id });
    if (invoice == null) {
      throw new NotFoundException('No invoice with given id');
    }
    return invoice;
  }

  async create(invoice: CreateInvoiceDto): Promise<GetInvoiceDto> {
    return await this.invoicesRepository.save(invoice);
  }

  //async update(
  //  invoiceId: string,
  //  invoice: UpdateInvoiceDto,
  //): Promise<GetInvoiceDto[]> {
  //}
  //
  //async delete(invoiceId: string): Promise<GetInvoiceDto[]> {
  //}
}
