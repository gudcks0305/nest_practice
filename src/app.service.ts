import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  load_time: Date = new Date();
  getHello(): string {
    return 'Hello World!';
  }

  async getAsync() {
    return {
      message: 'I am an async message chage',
      hot_reload: this.load_time,
    };
  }
}
