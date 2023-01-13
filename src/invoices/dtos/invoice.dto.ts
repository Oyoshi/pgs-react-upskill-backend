import { ContactBaseDto, GetContactDto } from './contact.dto';
import { ItemBaseDto, GetItemDto } from './item.dto';

class InvoiceBaseDto {
  name: string;
  createdAt: Date;
  validUntil: Date;
  recipient: ContactBaseDto;
  sender: ContactBaseDto;
  items: ItemBaseDto[];
}

export class GetInvoiceDto extends InvoiceBaseDto {
  id: string;
  recipient: GetContactDto;
  sender: GetContactDto;
  items: GetItemDto[];
}

export class CreateInvoiceDto extends InvoiceBaseDto {}

export class UpdateInvoiceDto extends InvoiceBaseDto {}
