import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

//! add debug, info, and error logs
@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
