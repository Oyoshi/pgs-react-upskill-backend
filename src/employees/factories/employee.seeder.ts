import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Employee } from '../entities';
import { GetEmployeeDto } from '../dtos';

const EMPLOYEES_NUM = 10;

export class EmployeesSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<GetEmployeeDto[]> {
    const employeesRepository = dataSource.getRepository(Employee);

    const employeesFactory = factoryManager.get(Employee);

    const employees = await Promise.all(
      Array(EMPLOYEES_NUM)
        .fill('')
        .map(async () => await employeesFactory.make()),
    );

    return await employeesRepository.save(employees);
  }
}
