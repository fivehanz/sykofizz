import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { User } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  // class constructor which runs automatically
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      // get access_token from Header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secret
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  // access_token validater
  async validate(payload: FindUniqueUserArgs): Promise<User> {
    // ! validate the access_token
    // const user = ;
    return await this.prisma.user.findUnique(payload);
  }
}
