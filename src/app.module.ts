import { Module } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    TypeOrmModule.forFeature([
      Student,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
