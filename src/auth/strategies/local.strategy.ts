import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { isNil } from 'lodash';
import { AuthService } from '../auth.service';
import { GetUserDto } from '../../users/dtos';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<GetUserDto> {
    const user = await this.authService.validateUser(username, password);
    if (isNil(user)) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
