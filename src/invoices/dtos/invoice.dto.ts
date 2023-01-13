import { IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ContactBaseDto, GetContactDto } from './contact.dto';
import { ItemBaseDto, GetItemDto } from './item.dto';

class InvoiceBaseDto {
  @IsNotEmpty()
  name: string;
  @Type(() => Date)
  @IsDate()
  createdAt: Date;
  @Type(() => Date)
  @IsDate()
  validUntil: Date;
  @IsNotEmpty()
  recipient: ContactBaseDto;
  @IsNotEmpty()
  sender: ContactBaseDto;
  @IsNotEmpty()
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
