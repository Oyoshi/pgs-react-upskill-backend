import { Injectable } from '@nestjs/common';
import { GetEmployeeDto } from './dtos';
import { Employee } from './entities';
import { postgresDataSource } from '../appDataSource';

@Injectable()
export class EmployeesService {
  private employeesRepository = postgresDataSource.getRepository(Employee);

  async find(): Promise<GetEmployeeDto[]> {
    return await this.employeesRepository.find();
  }
}
