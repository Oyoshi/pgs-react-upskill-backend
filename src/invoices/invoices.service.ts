import { Injectable, NotFoundException } from '@nestjs/common';
import { Raw } from 'typeorm';
import { isNil } from 'lodash';
import {
  GetAllInvoicesDto,
  GetInvoiceDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
  DeleteInvoiceDto,
} from './dtos';
import { Invoice, Contact, Item } from './entities';
import { postgresDataSource } from '../appDataSource';

@Injectable()
export class InvoicesService {
  private invoicesRepository = postgresDataSource.getRepository(Invoice);
  private contactsRepository = postgresDataSource.getRepository(Contact);
  private itemsRepository = postgresDataSource.getRepository(Item);

  async find(invoiceName?: string): Promise<GetAllInvoicesDto[]> {
    return await this.invoicesRepository.find({
      relations: ['items'],
      where: !isNil(invoiceName)
        ? { name: Raw((name) => `LOWER(${name}) Like '%${invoiceName}%'`) }
        : undefined,
    });
  }

  async findOne(id: string): Promise<GetInvoiceDto> {
    return await this.findInvoiceById(id);
  }

  async create(invoice: CreateInvoiceDto): Promise<GetInvoiceDto> {
    const { recipient, sender, items } = invoice;
    const savedRecipient = await this.contactsRepository.save(recipient);
    const savedSender = await this.contactsRepository.save(sender);
    const savedItems = await this.itemsRepository.save(items);
    return await this.invoicesRepository.save({
      ...invoice,
      recipient: savedRecipient,
      sender: savedSender,
      items: savedItems,
    });
  }

  async update(
    id: string,
    invoiceData: UpdateInvoiceDto,
  ): Promise<GetInvoiceDto> {
    const invoice = await this.findInvoiceById(id);
    // this.invoicesRepository.update(invoice)
    return invoice;
  }

  async delete(id: string): Promise<DeleteInvoiceDto> {
    const invoice = await this.findInvoiceById(id);
    const { recipient, sender, items } = invoice;
    await this.contactsRepository.remove([recipient, sender]);
    await this.itemsRepository.remove(items);
    return await this.invoicesRepository.remove(invoice);
  }

  private async findInvoiceById(id: string) {
    const invoice = await this.invoicesRepository.findOne({
      where: { id },
      relations: ['recipient', 'sender', 'items'],
    });
    if (isNil(invoice)) {
      throw new NotFoundException('No invoice with given id');
    }
    return invoice;
  }
}
