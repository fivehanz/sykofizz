import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../@generated/user/user.model';
import { UserCreateInput } from './../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';

//! add debug, info, and error logs
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.usersService.create(userCreateInput);
  }

  // get the current user with access_token validation
  @UseGuards(JwtAuthGuard)
  getMe() {
    return { user: 'user' };
  }

  // !Not Implemented
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('findOneUserInput')
    findOneUserInput: UserWhereUniqueInput
  ) {
    return this.usersService.findOne(findOneUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UserUpdateInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('findOneUserInput') findOneUserInput: UserWhereUniqueInput) {
    return this.usersService.remove(findOneUserInput);
  }
}
