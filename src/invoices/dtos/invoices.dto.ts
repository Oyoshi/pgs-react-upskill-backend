class Invoice {
  id: number;
  title: string;
  description: string;
  author: string;
}

export class GetInvoiceDto extends Invoice {}

export class CreateInvoiceDto extends Invoice {}
