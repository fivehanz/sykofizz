import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';

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

  // user login details validater
  async validate(payload: any): Promise<FindUniqueUserArgs> {
    return { where: { id: payload.sub } };
  }
}
