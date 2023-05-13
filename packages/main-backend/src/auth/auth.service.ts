import { JwtStrategy } from './jwt.strategy';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtToken } from './dto/jwt-token';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';
import { LoginUserInput } from './dto/login-user.input';

//! add debug, info, and error logs
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private strategy: JwtStrategy
  ) {}

  /**
   * Asynchronously validates user credentials and returns a signed JWT token.
   * @param {LoginUserInput} payload - Object containing user credentials.
   * @property {string} email - The email address associated with the user account.
   * @property {string} password - The password associated with the user account.
   * @return {Promise<JwtToken>} A Promise to the signed JWT token associated with the user account.
   * @throws {Error} If the provided email or password is invalid.
   */
  async validateUser(payload: LoginUserInput): Promise<JwtToken> {
    // Query the user with the provided email address and password
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });

    // check if user exists
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // check if password matches
    if (user.password !== payload.password) {
      throw new Error('Invalid email or password');
    }

    // generate a signed jwt token
    return this.signToken({
      id: user.id,
      email: user.email,
    });
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
