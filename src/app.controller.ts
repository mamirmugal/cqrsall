import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AppService } from './app.service';
import { Student } from './entities/student.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getStudents() {
    return await this.appService.getStudents();
  }

  @Post()
  async addStudent(@Body() studentData: any) {
    await this.appService.addStudent(studentData);
    return {
      message: 'success',
    };
  }

  @Post('/add')
  async addComandStudent(@Body() studentData: any) {
    await this.appService.sendCommand(studentData);
    return {
      message: 'success',
    };
  }
}
