import { ApiProperty } from '@nestjs/swagger';

export class Employee {
  @ApiProperty({ description: 'Unique identifier of the employee', example: '1' })
  id: string;

  @ApiProperty({ description: 'Name of the employee', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'Salary of the employee', example: 50000 })
  salary: number;
}
