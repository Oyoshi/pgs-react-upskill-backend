import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raw, Repository } from 'typeorm';
import { isNil } from 'lodash';
import {
  GetAllInvoicesDto,
  GetInvoiceDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from './dtos';
import { Invoice, Contact, Item } from './entities';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

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
    invoiceUpd: UpdateInvoiceDto,
  ): Promise<GetInvoiceDto> {
    const invoice = await this.findInvoiceById(id);
    const { recipient, sender, items } = invoice;

    invoice.name = invoiceUpd.name;
    invoice.createdAt = invoiceUpd.createdAt;
    invoice.validUntil = invoiceUpd.validUntil;

    await this.itemsRepository.remove(items);
    const savedRecipient = await this.contactsRepository.save({
      ...invoiceUpd.recipient,
      id: recipient.id,
    });
    const savedSender = await this.contactsRepository.save({
      ...invoiceUpd.sender,
      id: sender.id,
    });
    const savedItems = await this.itemsRepository.save(invoiceUpd.items);

    return await this.invoicesRepository.save({
      ...invoice,
      recipient: savedRecipient,
      sender: savedSender,
      items: savedItems,
    });
  }

  async delete(id: string): Promise<void> {
    const invoice = await this.findInvoiceById(id);
    await this.invoicesRepository.remove(invoice);
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
