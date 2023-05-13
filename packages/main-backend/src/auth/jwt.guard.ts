import {
  ExecutionContext,
  Injectable,
  createParamDecorator,
  //   UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(context: ExecutionContext) {
  //     // Add your custom authentication logic here
  //     // for example, call super.logIn(request) to establish a session.
  //     return super.canActivate(context);
  //   }
  //   handleRequest(err, user, info) {
  //     // You can throw an exception based on either "info" or "err" arguments
  //     if (err || !user) {
  //       throw err || new UnauthorizedException();
  //     }
  //     return user;
  //   }

  getRequest(context: ExecutionContext) {
    // Create a GraphQL execution context from the provided execution context.
    const ctx = GqlExecutionContext.create(context);
    // Get the request object from the context.
    return ctx.getContext().req;
  }
}

/**
 * A decorator that extracts the current user from the request object.
 *
 * @param data - Optional data that can be passed to the decorator.
 * @param context - The execution context of the request.
 * @returns The current user.
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    // Create a GraphQL execution context from the Nest.js execution context.
    const graphqlContext = GqlExecutionContext.create(context);
    // Extract the request object from the GraphQL context and return the user property.
    return graphqlContext.getContext().req.user;
  }
);
