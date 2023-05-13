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
   * Updates a single user in the database.
   *
   * @param {UpdateOneUserArgs} data - The data to update the user with.
   * @return {Promise<User>} The updated user.
   */
  update(data: UpdateOneUserArgs) {
    return this.prisma.user.update(data);
  }

  /**
   * Removes a user from the database.
   *
   * @param {FindUniqueUserArgs} user - The user to remove.
   * @returns {Promise<User>} - The removed user.
   */
  remove(user: FindUniqueUserArgs) {
    return this.prisma.user.delete(user);
  }
}
