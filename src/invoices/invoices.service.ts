import { Injectable, NotFoundException } from '@nestjs/common';
import { In, DeleteResult } from 'typeorm';
import { GetInvoiceDto, CreateInvoiceDto, UpdateInvoiceDto } from './dtos';
import { Invoice, Contact, Item } from './entities';
import { AppDataSource } from '../appDataSource';

@Injectable()
export class InvoicesService {
  private invoicesRepository = AppDataSource.getRepository(Invoice);
  private contactsRepository = AppDataSource.getRepository(Contact);
  private itemsRepository = AppDataSource.getRepository(Item);

  async find(): Promise<GetInvoiceDto[]> {
    return await this.invoicesRepository.find({
      relations: ['recipient', 'sender', 'items'],
    });
  }

  async findOne(id: string): Promise<GetInvoiceDto> {
    return await this.findInvoiceById(id);
  }

  async create(invoice: CreateInvoiceDto): Promise<GetInvoiceDto> {
    const { recipient, sender, items } = invoice;
    const recipientToSave = await this.contactsRepository.save(recipient);
    const senderToSave = await this.contactsRepository.save(sender);
    const itemsToSave = await this.itemsRepository.save(items);
    return await this.invoicesRepository.save({
      ...invoice,
      recipient: recipientToSave,
      sender: senderToSave,
      items: itemsToSave,
    });
  }

  async update(
    id: string,
    invoiceData: UpdateInvoiceDto,
  ): Promise<GetInvoiceDto> {
    const invoice = await this.findInvoiceById(id);
    // TODO- finish this code
    return invoice;
  }

  async delete(id: string): Promise<DeleteResult> {
    // TODO - still does not work, requires cascade deletion
    const invoice = await this.findInvoiceById(id);
    const { recipient, sender, items } = invoice;
    const contactsToDelete = [recipient.id, sender.id];
    await this.contactsRepository.delete({ id: In(contactsToDelete) });
    const itemsToDelete = items.map((item) => item.id);
    await this.itemsRepository.delete({ id: In(itemsToDelete) });
    return await this.invoicesRepository.delete({ id: invoice.id });
  }

  private async findInvoiceById(id: string) {
    const invoice = await this.invoicesRepository.findOne({
      where: { id },
      relations: ['recipient', 'sender', 'items'],
    });
    if (invoice == null) {
      throw new NotFoundException('No invoice with given id');
    }
    return invoice;
  }
}
