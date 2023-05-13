import { Injectable } from '@nestjs/common';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';
import { PrismaService } from '../prisma/prisma.service';
import { FindUniqueUserArgs } from '../@generated/user/find-unique-user.args';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';

//! add debug, info, and error logs
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // create a user with prisma
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

  findAll() {
    return `This action returns all users`;
  }

  update(updateUserInput: UserUpdateInput) {
    return `This action updates a ${updateUserInput.email}`;
  }

  remove(findOneUserInput: UserWhereUniqueInput) {
    return `This action removes a ${findOneUserInput.id} user`;
  }
}
