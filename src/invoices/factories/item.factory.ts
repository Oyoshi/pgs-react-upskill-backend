import { setSeederFactory } from 'typeorm-extension';
import { Item } from '../entities/item.entity';

const AMOUNT_UPPER_BOUNDARY = 100;
const AMOUNT_LOWER_BOUNDARY = 1;
const PRICE_UPPER_BOUNDARY = 1000.0;
const PRICE_LOWER_BOUNDARY = 1.0;

export const ItemsFactory = setSeederFactory(Item, (faker) => {
  const item = new Item();
  item.name = faker.name.jobDescriptor();
  item.amount = faker.number.int({
    min: AMOUNT_LOWER_BOUNDARY,
    max: AMOUNT_UPPER_BOUNDARY,
  });
  item.unit = faker.helpers.arrayElement(['items', 'palettes']);
  item.tax = faker.helpers.arrayElement([8, 23]);
  item.price = Number(
    faker.finance.amount({
      min: PRICE_LOWER_BOUNDARY,
      max: PRICE_UPPER_BOUNDARY,
    }),
  );
  return item;
});
