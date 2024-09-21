import { setSeederFactory } from 'typeorm-extension';
import { Contact } from '../entities/contact.entity';

export const ContactsFactory = setSeederFactory(Contact, (faker) => {
  const contact = new Contact();
  contact.companyName = faker.company.name();
  contact.city = faker.location.city();
  contact.street = faker.location.street();
  contact.postcode = faker.location.zipCode('##-###');
  contact.nip = faker.number
    .bigInt({ min: 1000000000, max: 9999999999 })
    .toString();
  contact.phone = faker.phone.number();
  contact.email = faker.internet.email();
  contact.bankAccount = faker.finance.accountNumber(24);
  return contact;
});
