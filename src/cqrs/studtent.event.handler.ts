import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { StudentEvent } from './student.event';

@EventsHandler(StudentEvent)
export class StudentEventHandler implements IEventHandler<StudentEvent> {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async handle(event: StudentEvent) {
    const { name, address, phone } = event;
    console.log('Event handler');

    await this.studentRepository.insert({
      name: name + ' event',
      address: address + ' address',
      phone: phone + ' phone',
    });
  }
}
