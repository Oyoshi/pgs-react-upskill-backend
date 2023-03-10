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
  items: ItemBaseDto[];
}

class InvoiceWithContactBaseDto extends InvoiceBaseDto {
  @IsNotEmpty()
  recipient: ContactBaseDto;
  @IsNotEmpty()
  sender: ContactBaseDto;
}

export class GetAllInvoicesDto extends InvoiceBaseDto {
  @IsNotEmpty()
  id: string;
  items: GetItemDto[];
}

export class GetInvoiceDto extends InvoiceWithContactBaseDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  recipient: GetContactDto;
  @IsNotEmpty()
  sender: GetContactDto;
  @IsNotEmpty()
  items: GetItemDto[];
}

export class CreateInvoiceDto extends InvoiceWithContactBaseDto {}

export class UpdateInvoiceDto extends InvoiceWithContactBaseDto {}
