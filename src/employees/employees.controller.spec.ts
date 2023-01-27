import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee } from './entities';
import { EMPLOYEES_MOCK } from './employees.mock';

describe('EmployeesController', () => {
  let employeesController: EmployeesController;
  let employeesService: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeesController],
      providers: [
        EmployeesService,
        {
          provide: getRepositoryToken(Employee),
          useClass: Repository,
        },
      ],
    }).compile();

    employeesController = module.get<EmployeesController>(EmployeesController);
    employeesService = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(employeesController).toBeDefined();
  });

  describe('find', () => {
    it('should return all employees', async () => {
      jest
        .spyOn(employeesService, 'find')
        .mockResolvedValueOnce(EMPLOYEES_MOCK);
      expect(await employeesController.find()).toBe(EMPLOYEES_MOCK);
    });
  });
});
