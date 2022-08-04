import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 컨드롤러는 express의 미들웨어와 같다. url를 넘겨주고 함수나 클래스를 매핑하여 실행해준다.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  getHi(): string {
    return this.appService.getHi();
  }
}
