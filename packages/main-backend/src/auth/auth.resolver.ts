import { JwtToken } from './auth.types';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

//! add debug, info, and error logs
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query()
  login(): Promise<JwtToken> {
    return this.authService.login();
  }
}
