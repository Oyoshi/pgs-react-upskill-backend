import { Injectable, NotFoundException } from '@nestjs/common';
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
    const invoice = await this.invoicesRepository.findOne({
      where: { id },
      relations: ['recipient', 'sender', 'items'],
    });
    if (invoice == null) {
      throw new NotFoundException('No invoice with given id');
    }
    return invoice;
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

  // async update(
  //   id: string,
  //   invoiceData: UpdateInvoiceDto,
  // ): Promise<GetInvoiceDto> {
  //   const invoice = await this.invoicesRepository.findOneBy({ id });
  //   if (invoice == null) {
  //     throw new NotFoundException('No invoice with given id');
  //   }
  //
  //   invoice
  // }

  async delete(id: string) {
    return await this.invoicesRepository.delete({ id });
  }
}
