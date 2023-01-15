import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Employee } from '../entities/employee.entity';

export const EmployeesFactory = setSeederFactory(Employee, (faker: Faker) => {
  const employee = new Employee();
  employee.firstName = faker.name.firstName();
  employee.lastName = faker.name.lastName();
  employee.title = faker.name.jobTitle();
  return employee;
});
