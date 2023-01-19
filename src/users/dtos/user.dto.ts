import { IsNotEmpty } from 'class-validator';

class UserBaseDto {
  @IsNotEmpty()
  username: string;
}

export class GetUserDto extends UserBaseDto {
  @IsNotEmpty()
  id: string;
}

export class GetUserWithPasswordDto extends GetUserDto {
  @IsNotEmpty()
  password: string;
}
