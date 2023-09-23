import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@Controller('second')
@ApiTags('second')
export class SecondController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get('/async')
  async getAsync(): Promise<object> {
    return {
      message: 'I am an async message chage',
    };
  }
}
