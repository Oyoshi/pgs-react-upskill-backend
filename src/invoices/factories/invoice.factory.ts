import { setSeederFactory } from 'typeorm-extension';
import { Invoice } from '../entities/invoice.entity';

export const InvoicesFactory = setSeederFactory(Invoice, (faker) => {
  const invoice = new Invoice();
  invoice.name = faker.company.name();
  invoice.createdAt = faker.date.between({
    from: '2021-01-01',
    to: '2022-12-31',
  });
  invoice.validUntil = faker.date.between({
    from: '2023-01-01',
    to: '2024-12-31',
  });
  return invoice;
});
