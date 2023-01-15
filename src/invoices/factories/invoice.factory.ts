import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Invoice } from '../entities/invoice.entity';

export const InvoicesFactory = setSeederFactory(Invoice, (faker: Faker) => {
  const invoice = new Invoice();
  invoice.name = faker.lorem.sentence();
  invoice.createdAt = faker.date.between(
    '2021-01-01T00:00:00.000Z',
    '2022-01-01T00:00:00.000Z',
  );
  invoice.validUntil = faker.date.between(
    '2022-01-01T00:00:00.000Z',
    '2023-01-01T00:00:00.000Z',
  );
  return invoice;
});
