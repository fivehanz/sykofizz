import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

//! add debug, info, and error logs
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  //! TODO: { access_token: string } to a Type
  login(): Promise<{ access_token: string }> {
    //! do login logic here with prisma
    return this.signToken('some-lksdjflasjdfl-uuid', 'email@email');
  }

  //! with access_token get the current user
  me() {
    return { message: 'My name is me!' };
  }

  /**
   * TODO: convert { access_token: string } to a Type
   * @description async fn to generate a JWT
   * @param {string} userId - The user's ID.
   * @param {string} email - The user's email.
   * @returns {Promise<{access_token: string}>} The signed token.
   **/
  async signToken(
    userId: string,
    email: string
  ): Promise<{ access_token: string }> {
    // generate a token
    const token = await this.jwt.signAsync(
      {
        // unique identifier
        sub: userId,
        // secondary signature
        email: email,
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
