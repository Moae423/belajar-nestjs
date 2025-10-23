import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  findAll() {
    return 'All this property';
  }
  findOne(id: string, name: string) {
    return `ID : ${id}, Name : ${name}`;
  }
}
