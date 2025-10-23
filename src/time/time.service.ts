import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  getWaktu() {
    return new Date().toISOString();
  }
}
