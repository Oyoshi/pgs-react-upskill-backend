export class ItemBaseDto {
  name: string;
  amount: number;
  unit: string;
  tax: number;
  price: number;
}

export class GetItemDto extends ItemBaseDto {
  id: string;
}
