import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../@generated/user/user.model';
import { UserCreateInput } from './../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, JwtAuthGuard } from '../auth/jwt.guard';

//! add debug, info, and error logs
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Creates a new user based on the provided user data.
   * @param data The user data to create the user with.
   * @returns The newly created user.
   */
  @Mutation(() => User)
  createUser(@Args('user') data: UserCreateInput) {
    return this.usersService.create({ data });
  }

  /**
   * Returns a user object by finding it in the database
   * using the provided user object.
   *
   * @param {@CurrentUser()} user - The user object provided by the decorator.
   * @return {Promise<User>} The found user object.
   */
  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  getMe(@CurrentUser() user: User) {
    return this.usersService.findOne({ where: user });
  }

  /**
   * Finds a single user based on the given unique identifier.
   *
   * @param {UserWhereUniqueInput} user - The unique identifier of the user to find.
   * @return {Promise<User>} The user that was found.
   */
  @Query(() => User, { name: 'user' })
  findOne(
    @Args('user')
    user: UserWhereUniqueInput
  ) {
    return this.usersService.findOne({ where: user });
  }

  // ! TODO
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  // ! TODO
  @Mutation(() => User)
  updateUser(@Args('user') updateUserInput: UserUpdateInput) {
    return this.usersService.update(updateUserInput);
  }

  // ! TODO
  @Mutation(() => User)
  removeUser(@Args('user') findOneUserInput: UserWhereUniqueInput) {
    return this.usersService.remove(findOneUserInput);
  }
}
