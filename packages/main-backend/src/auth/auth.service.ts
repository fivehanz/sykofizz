import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { message: 'this is login!' };
  }

  register() {
    return { message: 'this is register!' };
  }

  me() {
    return { message: 'My name is me!' };
  }
}
