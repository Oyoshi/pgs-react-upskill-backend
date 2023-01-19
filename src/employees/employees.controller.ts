import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { GetEmployeeDto } from './dtos';
import { JwtAuthGuard } from '../auth/guards';

@ApiTags('Employees')
@Controller('api/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async find(): Promise<GetEmployeeDto[]> {
    return await this.employeesService.find();
  }
}
