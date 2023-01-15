import { IsNotEmpty } from 'class-validator';

export class GetEmployeeDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  title: string;
}
