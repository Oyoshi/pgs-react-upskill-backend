class InvoiceBaseDto {
  title: string;
  description: string;
  author: string;
}

export class GetInvoiceDto extends InvoiceBaseDto {
  id: string;
}

export class CreateInvoiceDto extends InvoiceBaseDto {}

export class UpdateInvoiceDto extends InvoiceBaseDto {}
