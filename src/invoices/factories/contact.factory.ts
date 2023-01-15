import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Contact } from '../entities/contact.entity';

export const ContactsFactory = setSeederFactory(Contact, (faker: Faker) => {
  const contact = new Contact();
  contact.companyName = faker.company.name();
  contact.city = faker.address.cityName();
  contact.street = faker.address.streetName();
  contact.postcode = faker.address.zipCode();
  contact.nip = '5669922649';
  contact.phone = faker.phone.number();
  contact.email = faker.internet.email();
  contact.bankAccount = faker.finance.account();
  return contact;
});
