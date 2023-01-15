import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Invoice, Contact, Item } from '../entities';
import { GetAllInvoicesDto } from '../dtos';

const SEED_N = Number(process.env.SEED_N) || 0;
const ITEMS_UPPER_BOUNDARY = 10;
const ITEMS_LOWER_BOUNDARY = 1;

export class InvoicesSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<GetAllInvoicesDto[]> {
    const invoicesRepository = dataSource.getRepository(Invoice);

    const invoicesFactory = factoryManager.get(Invoice);
    const contactsFactory = factoryManager.get(Contact);
    const itemsFactory = factoryManager.get(Item);

    const invoices = await Promise.all(
      Array(SEED_N)
        .fill('')
        .map(async () => {
          const savedRecipient = await contactsFactory.save();
          const savedSender = await contactsFactory.save();
          const savedItems = await itemsFactory.saveMany(
            faker.datatype.number({
              min: ITEMS_LOWER_BOUNDARY,
              max: ITEMS_UPPER_BOUNDARY,
            }),
          );
          const invoice = await invoicesFactory.make({
            recipient: savedRecipient,
            sender: savedSender,
            items: savedItems,
          });
          return invoice;
        }),
    );

    return await invoicesRepository.save(invoices);
  }
}
