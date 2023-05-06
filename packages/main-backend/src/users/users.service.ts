import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';

@Injectable()
export class UsersService {
  create(userCreateInput: UserCreateInput) {
    return userCreateInput;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(findOneUserInput: UserWhereUniqueInput) {
    return findOneUserInput;
  }

  update(updateUserInput: UserUpdateInput) {
    return `This action updates a ${updateUserInput.email}`;
  }

  remove(findOneUserInput: UserWhereUniqueInput) {
    return `This action removes a ${findOneUserInput.id} user`;
  }
}
