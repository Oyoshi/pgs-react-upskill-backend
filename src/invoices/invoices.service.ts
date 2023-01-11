import { Injectable, HttpException } from '@nestjs/common';
import { GetInvoiceDto } from './dtos';

export const INVOICES: GetInvoiceDto[] = [
  {
    id: 1,
    title: 'First book',
    description: 'This is the description for the first book',
    author: 'Olususi Oluyemi',
  },
  {
    id: 2,
    title: 'Second book',
    description: 'This is the description for the second book',
    author: 'John Barry',
  },
  {
    id: 3,
    title: 'Third book',
    description: 'This is the description for the third book',
    author: 'Clement Wilfred',
  },
  {
    id: 4,
    title: 'Fourth book',
    description: 'This is the description for the fourth book',
    author: 'Christian nwamba',
  },
  {
    id: 5,
    title: 'Fifth book',
    description: 'This is the description for the fifth book',
    author: 'Chris anderson',
  },
  {
    id: 6,
    title: 'Sixth book',
    description: 'This is the description for the sixth book',
    author: 'Olususi Oluyemi',
  },
];

@Injectable()
export class InvoicesService {
  getInvoices(): Promise<GetInvoiceDto[]> {
    return new Promise((resolve) => {
      resolve(INVOICES);
    });
  }

  getInvoice(invoiceId: string): Promise<GetInvoiceDto> {
    return new Promise((resolve) => {
      const id = Number(invoiceId);
      const invoice = INVOICES.find((book) => book.id === id);
      if (!invoice) {
        throw new HttpException('Invoice does not exist!', 404);
      }
      resolve(invoice);
    });
  }
}
