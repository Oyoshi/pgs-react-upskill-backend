export class ContactBaseDto {
  companyName: string;
  city: string;
  street: string;
  postcode: string;
  nip: string;
  phone: string;
  email: string;
  bankAccount: string;
}

export class GetContactDto extends ContactBaseDto {
  id: string;
}
