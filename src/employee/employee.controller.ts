import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() employee: Employee) {
    return this.employeeService.create(employee);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.employeeService.delete(id);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.employeeService.findByName(name);
  }

  @Get('highest-salary')
  findHighestSalary() {
    return this.employeeService.findHighestSalary();
  }
}
