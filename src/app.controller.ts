import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
}
