import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';
import { GreetingModule } from './greeting/greeting.module';

@Module({
  imports: [TimeModule, GreetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
