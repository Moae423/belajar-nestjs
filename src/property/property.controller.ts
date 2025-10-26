import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';
import { PropertyService } from './property.service';

interface propertyResponse {
  message: string;
  data: any;
  success: boolean;
}

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  findAll() {
    return 'All this property';
  }
  @Get('contoh-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse() {
    return {
      data: 'hello json',
      success: true,
      message: 'hello message',
    };
  }
  @Get('/:id/:name')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  findOne(
    @Param('id') id: string,
    @Param('name') name: string,
  ): propertyResponse {
    return {
      message: ` ${this.propertyService.findOne(id, name)}`,
      data: { id, name },
      success: true,
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: 'contoh-response',
      statusCode: 302,
    };
  }

  @Post()
  @HttpCode(201)
  create(@Body() name: string) {
    return name;
  }
}
