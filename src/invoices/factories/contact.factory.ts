import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Contact } from '../entities/contact.entity';

export const ContactsFactory = setSeederFactory(Contact, (faker: Faker) => {
  const contact = new Contact();
  contact.companyName = faker.company.name();
  contact.city = faker.address.cityName();
  contact.street = faker.address.streetName();
  contact.postcode = faker.address.zipCode('##-###');
  contact.nip = faker.datatype
    .bigInt({ min: 1000000000, max: 9999999999 })
    .toString();
  contact.phone = faker.phone.number();
  contact.email = faker.internet.email();
  contact.bankAccount = faker.finance.account(24);
  return contact;
});
