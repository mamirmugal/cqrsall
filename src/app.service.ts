import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CommandBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class AppService {
  constructor(
    // private commandBus: CommandBus,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  /**
   * Getting all students
   * @returns Students
   */
  async getStudents() {
    return await this.studentRepository.find();
  }

  /**
   * add student
   * @param studentData
   */
  async addStudent(studentData: any) {
    return await this.studentRepository.insert({
      name: studentData?.name,
      address: studentData?.address,
      phone: studentData?.phone,
    });
  }
}
