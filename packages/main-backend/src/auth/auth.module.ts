import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

//! add debug, info, and error logs
@Module({
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
