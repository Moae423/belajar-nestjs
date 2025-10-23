import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public appService: AppService) {}

  @Get('hello')
  getHello() {
    return {
      message: this.appService.getHello(),
    };
  }
}
