import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Invoice } from '../entities/invoice.entity';

export const InvoicesFactory = setSeederFactory(Invoice, (faker: Faker) => {
  const invoice = new Invoice();
  invoice.name = faker.company.name();
  invoice.createdAt = faker.date.between('2021-01-01', '2022-12-31');
  invoice.validUntil = faker.date.between('2023-01-01', '2024-12-31');
  return invoice;
});
