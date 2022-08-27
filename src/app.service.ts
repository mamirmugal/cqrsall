import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentCommand } from './cqrs/student.command';
import { Books } from './entities/books.entity';
import { StudentQuery } from './query/student.query';

@Injectable()
export class AppService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    
    @InjectRepository(Books)
    private bookRepository: Repository<Books>,
  ) {}

  /**
   * Getting all students
   * @returns Students
   */
  async getStudents() {
    return this.queryBus.execute(new StudentQuery());
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

  //////////////////////////////////////////////////

  async sendCommand(studentData: any) {
    // sending student command
    // this will be cought by 
    this.commandBus.execute(
      new StudentCommand(
        studentData?.name,
        studentData?.address,
        studentData?.phone,
      ),
    );
  }
}
