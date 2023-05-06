import { Injectable } from '@nestjs/common';

//! add debug, info, and error logs
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'hello, hanz!' };
  }
}
