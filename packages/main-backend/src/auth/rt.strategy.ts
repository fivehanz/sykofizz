import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { Request } from 'express';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  // class constructor which runs automatically
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      // pass request object to callback
      passRegToCallback: true,
      // get access_token from Header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // !secret (refresh token secret !== jwt secret)
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  // user login details validater
  async validate(req: Request, payload: any): Promise<FindUniqueUserArgs> {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();
    return { ...payload, refreshToken };
  }
}
