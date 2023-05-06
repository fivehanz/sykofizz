import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPageInput } from './user-create-without-page.input';

@InputType()
export class UserCreateOrConnectWithoutPageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPageInput, {nullable:false})
    @Type(() => UserCreateWithoutPageInput)
    create!: UserCreateWithoutPageInput;
}
