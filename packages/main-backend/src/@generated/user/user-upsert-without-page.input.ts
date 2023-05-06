import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPageInput } from './user-update-without-page.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPageInput } from './user-create-without-page.input';

@InputType()
export class UserUpsertWithoutPageInput {

    @Field(() => UserUpdateWithoutPageInput, {nullable:false})
    @Type(() => UserUpdateWithoutPageInput)
    update!: UserUpdateWithoutPageInput;

    @Field(() => UserCreateWithoutPageInput, {nullable:false})
    @Type(() => UserCreateWithoutPageInput)
    create!: UserCreateWithoutPageInput;
}
