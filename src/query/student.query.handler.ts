import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { StudentQuery } from './student.query';


@QueryHandler(StudentQuery)
export class GetStudentHandler implements IQueryHandler<StudentQuery> {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async execute(query: StudentQuery) {
    console.log('student query');
    return this.studentRepository.find();
  }
}