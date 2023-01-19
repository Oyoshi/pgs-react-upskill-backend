import { Injectable, BadRequestException } from '@nestjs/common';
import { verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { isNil } from 'lodash';
import { UsersService } from '../users/users.service';
import { GetUserDto } from '../users/dtos';
import { User } from '../users/entities';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // For a security purpose we are throwing same exception for invalid password or username
  // This approach protects us from malicious attacks which aim to get a list of usernames
  async validateUser(username: string, pass: string): Promise<GetUserDto> {
    const user = await this.usersService.findOneByUserName(username);
    const passwordMatch = await verify(user.password, pass);
    if (isNil(user) || !passwordMatch) {
      throw new BadRequestException('Invalid username or password');
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
