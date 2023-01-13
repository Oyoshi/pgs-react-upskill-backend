import { IsNotEmpty, IsEmail } from 'class-validator';

export class ContactBaseDto {
  @IsNotEmpty()
  companyName: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  street: string;
  @IsNotEmpty()
  postcode: string;
  @IsNotEmpty()
  nip: string;
  @IsNotEmpty()
  phone: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  bankAccount: string;
}

export class GetContactDto extends ContactBaseDto {
  id: string;
}
