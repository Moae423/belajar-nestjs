import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getHello() {
    return { message: 'Hello Nest JS!' };
  }
  getGreeting(name: string) {
    return { message: `Hello ${name}` };
  }
}
