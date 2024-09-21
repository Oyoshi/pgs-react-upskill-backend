import { setSeederFactory } from 'typeorm-extension';
import { Employee } from '../entities/employee.entity';

export const EmployeesFactory = setSeederFactory(Employee, (faker) => {
  const employee = new Employee();
  employee.firstName = faker.person.firstName();
  employee.lastName = faker.person.lastName();
  employee.title = faker.person.jobTitle();
  return employee;
});
