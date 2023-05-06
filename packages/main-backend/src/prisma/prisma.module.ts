import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//! add debug, info, and error logs
@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
