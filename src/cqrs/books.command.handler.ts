import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksCommand } from './books.command';
import { Books } from '../entities/books.entity';

@CommandHandler(BooksCommand)
export class BookCommandHandler implements ICommandHandler<BooksCommand> {
  constructor(
    @InjectRepository(Books)
    private bookRepository: Repository<Books>,
  ) {}

  async execute(command: BooksCommand) {
    const { name } = command;
    console.log('Command book insert');
    await this.bookRepository.insert({
      name: name,
    });
  }
}
