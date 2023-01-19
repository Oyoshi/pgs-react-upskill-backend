import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { hash } from 'argon2';
import { User } from '../entities';
import { GetUserDto } from '../dtos';

export class UsersSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<GetUserDto> {
    const usersRepository = dataSource.getRepository(User);

    const hashedPassword = await hash('upskill');
    const savedUser = await usersRepository.save({
      username: 'upskill',
      password: hashedPassword,
    });
    const { password, ...result } = savedUser;
    return result;
  }
}
