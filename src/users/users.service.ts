import { Injectable } from '@nestjs/common';
import { postgresDataSource } from '../appDataSource';
import { User } from './entities';
import { GetUserWithPasswordDto } from './dtos';

@Injectable()
export class UsersService {
  private usersRepository = postgresDataSource.getRepository(User);

  async findOneByUserName(username: string): Promise<GetUserWithPasswordDto> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}
