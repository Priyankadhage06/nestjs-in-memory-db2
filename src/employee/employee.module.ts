import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('employee')], // Use a named feature for better organization
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
