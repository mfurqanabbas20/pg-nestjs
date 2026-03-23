import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) public employeeRepository: Repository<Employee> ){}

    async createEmployee(employeeData: Partial<Employee>): Promise<Employee>{
        const employee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(employee);
    }
}
