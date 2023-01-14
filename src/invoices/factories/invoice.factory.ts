import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Invoice } from '../entities/invoice.entity';

export const InvoiceFactory = setSeederFactory(Invoice, (faker: Faker) => {
  const invoice = new Invoice();
  //post.content = faker.lorem.sentence();
  return invoice;
});
