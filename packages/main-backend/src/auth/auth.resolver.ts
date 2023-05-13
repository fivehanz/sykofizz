import { JwtToken } from './dto/jwt-token';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';

//! add debug, info, and error logs
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  /**
   * Authenticates a user and returns a JWT token.
   * @param {LoginUserInput} loginUserInput - The login information of the user.
   * @return {Promise<JwtToken>} The JWT token of the authenticated user.
   */
  @Mutation(() => JwtToken)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput
  ): Promise<JwtToken> {
    return this.authService.validateUser(loginUserInput);
  }
}
