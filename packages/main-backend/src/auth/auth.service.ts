import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

//! add debug, info, and error logs
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

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
