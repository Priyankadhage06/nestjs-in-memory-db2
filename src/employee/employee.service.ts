import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly dbService: InMemoryDBService<Employee>) {}

  create(employee: Employee) {
    return this.dbService.create(employee);
  }

  delete(id: string) {
    this.dbService.delete(id);
  }

  findAll(): Employee[] {
    return this.dbService.getAll();
  }

  findByName(name: string): Employee[] {
    return this.dbService.getAll().filter(emp => emp.name === name);
  }

  findHighestSalary(): Employee {
    return this.dbService.getAll().reduce((prev, curr) => (curr.salary > prev.salary ? curr : prev));
  }
}
