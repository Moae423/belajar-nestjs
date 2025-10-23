import { Controller, Get, Param } from '@nestjs/common';
import { GreetingService } from './greeting.service';

@Controller('api/users')
export class GreetingController {
  constructor(public greeting: GreetingService) {}
  @Get('/greeting')
  getHello() {
    return this.greeting.getHello();
  }
  @Get('/:name')
  getGreeting(@Param('name') name: string) {
    return this.greeting.getGreeting(name);
  }
}
