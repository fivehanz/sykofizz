import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

//! add debug, info, and error logs
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
