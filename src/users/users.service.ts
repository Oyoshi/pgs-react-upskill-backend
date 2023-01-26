import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { GetUserWithPasswordDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneByUserName(username: string): Promise<GetUserWithPasswordDto> {
    return await this.usersRepository.findOne({ where: { username } });
  }
}
