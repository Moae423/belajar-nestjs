import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';
import { GreetingModule } from './greeting/greeting.module';
import { PropertyModule } from './property/property.module';
@Module({
  imports: [TimeModule, GreetingModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
