import { IsNotEmpty } from 'class-validator';

class ItemBaseDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  amount: number;
  @IsNotEmpty()
  unit: string;
  @IsNotEmpty()
  tax: number;
  @IsNotEmpty()
  price: number;
}

export class GetItemDto extends ItemBaseDto {
  @IsNotEmpty()
  id: string;
}
