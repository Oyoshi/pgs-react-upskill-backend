import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { GetEmployeeDto } from './dtos';

@ApiTags('Employees')
@Controller('api/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  // TODO - use JWT Auth Gaurd
  @Get()
  async find(): Promise<GetEmployeeDto[]> {
    return await this.employeesService.find();
  }
}
