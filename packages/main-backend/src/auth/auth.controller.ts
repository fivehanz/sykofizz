import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: any) {
    console.log({
      dto,
    });
    return this.authService.register();
  }

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Get('me')
  me() {
    return this.authService.me();
  }
}
