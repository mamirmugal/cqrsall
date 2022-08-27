import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksCommand } from './cqrs/books.command';
import { BookCommandHandler } from './cqrs/books.command.handler';
import { StudentCommand } from './cqrs/student.command';
import { StudentCommandHandler } from './cqrs/student.command.handler';
import { StudentSagas } from './cqrs/student.saga';
import { StudentEventHandler } from './cqrs/studtent.event.handler';
import { Books } from './entities/books.entity';
import { Student } from './entities/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'student.db',
      // entities: [Student],
      synchronize: true, //development only
      logging: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Student, Books]),
    CqrsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    StudentCommand,
    StudentCommandHandler,
    StudentEventHandler,
    StudentSagas,
    BooksCommand,
    BookCommandHandler,
  ],
})
export class AppModule {}
