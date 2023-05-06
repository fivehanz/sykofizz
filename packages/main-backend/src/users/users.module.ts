import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

//! add debug, info, and error logs
@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
