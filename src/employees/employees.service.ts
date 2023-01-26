import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetEmployeeDto } from './dtos';
import { Employee } from './entities';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  async find(): Promise<GetEmployeeDto[]> {
    return await this.employeesRepository.find();
  }
}
