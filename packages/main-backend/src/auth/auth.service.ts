import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtToken } from './auth.types';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';

//! add debug, info, and error logs
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  login(): Promise<JwtToken> {
    //! do login logic here with prisma

    // Query the user with the provided email address and password
    // const user = await this.prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });

    // If the user doesn't exist, throw an error
    // if (!user) {
    //   throw new Error('Invalid email or password');
    // }

    // generate a signed jwt token
    return this.signToken({
      id: 'some-lksdjflasjdfl-uuid',
      email: 'email@email',
    });
  }

  //! with access_token get the current user
  me() {
    return { message: 'My name is me!' };
  }

  /**
   * @description async fn to generate a JWT
   * @param payload {UserWhereUniqueInput}
   * - The user's ID and email address.
   * @returns {Promise<JwtToken>} The signed token.
   **/
  async signToken(payload: UserWhereUniqueInput): Promise<JwtToken> {
    // generate a token
    const token = await this.jwt.signAsync(
      {
        // unique identifier
        sub: payload.id,
        // secondary signature
        email: payload.email,
      },
      // options object
      {
        expiresIn: '15m', // expires in 15 minutes
        secret: this.config.get('JWT_SECRET'), // secret
      }
    );

    // return the token with the key
    return {
      access_token: token,
    };
  }
}
