import { Controller, Get, Header, HttpCode, Param, Res } from '@nestjs/common';
import { UserService } from './user.service';
import type { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/set-cookie/:name')
  @Header('Content-Type', 'application/json')
  setCookie(@Param('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Cookie Set Successfully');
  }
  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async findAll(): Promise<Record<string, any>> {
    return await this.userService.getAllUsers();
  }
}
