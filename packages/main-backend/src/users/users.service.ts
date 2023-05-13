import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';

//! add debug, info, and error logs
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new user in the database.
   *
   * @param {CreateOneUserArgs} args - The arguments needed to create a new user.
   * @returns {Promise<User>} - The newly created user.
   */
  create(args: CreateOneUserArgs) {
    return this.prisma.user.create(args);
  }

  /**
   * Finds a unique user given the arguments.
   *
   * @param {FindUniqueUserArgs} / { where: user } - The arguments to find a unique user.
   * @return {Promise<User | null>} - The found user if any, otherwise null.
   */
  findOne(user: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(user);
  }

  /**
   * Retrieves all users from the database using Prisma client.
   *
   * @return {Promise<User[]>} Returns a promise that resolves with an array
   * of User objects representing all users in the database.
   */
  findAll() {
    return this.prisma.user.findMany();
  }

  /**
   * Update a unique user with new data.
   *
   * @param {FindUniqueUserArgs} user - The user to update.
   * @param {UpdateOneUserArgs} data - The new data for the user.
   * @returns {Promise<User>} The updated user.
   */
  update(user: FindUniqueUserArgs, data: UpdateOneUserArgs) {
    return this.prisma.user.update({ ...user, data });
  }

  /**
   * Removes a user from the database.
   *
   * @param {FindUniqueUserArgs} user - The unique identifier of the user that will be removed.
   */
  remove(user: FindUniqueUserArgs) {
    this.prisma.user.delete(user);
  }
}
