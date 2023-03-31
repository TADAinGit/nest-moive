import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

interface HelloRequest {
  name: string;
  from: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello(@Body() person: HelloRequest): string {
    console.log(person);
    return `Hello ${person.name} from ${person.from}`;
  }
}
