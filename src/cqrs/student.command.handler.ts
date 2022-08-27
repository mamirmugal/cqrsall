import {
  CommandHandler,
  EventBus,
  EventPublisher,
  ICommandHandler,
} from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { StudentCommand } from './student.command';
import { StudentEvent } from './student.event';

@CommandHandler(StudentCommand)
export class StudentCommandHandler implements ICommandHandler<StudentCommand> {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    private eventBus: EventBus, 
    // private publisher: EventPublisher,
  ) {}

  async execute(command: StudentCommand) {
    const { name, address, phone } = command;
    console.log('Command insert');
    await this.studentRepository.insert({
      name: name,
      address: address,
      phone: phone,
    });

    // dispatching event
    console.log('enventBus publish');
    this.eventBus.publish(new StudentEvent(name, address, phone));
  }
}
