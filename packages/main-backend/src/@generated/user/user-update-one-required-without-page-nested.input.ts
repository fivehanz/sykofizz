import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPageInput } from './user-create-without-page.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPageInput } from './user-create-or-connect-without-page.input';
import { UserUpsertWithoutPageInput } from './user-upsert-without-page.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPageInput } from './user-update-without-page.input';

@InputType()
export class UserUpdateOneRequiredWithoutPageNestedInput {

    @Field(() => UserCreateWithoutPageInput, {nullable:true})
    @Type(() => UserCreateWithoutPageInput)
    create?: UserCreateWithoutPageInput;

    @Field(() => UserCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPageInput)
    connectOrCreate?: UserCreateOrConnectWithoutPageInput;

    @Field(() => UserUpsertWithoutPageInput, {nullable:true})
    @Type(() => UserUpsertWithoutPageInput)
    upsert?: UserUpsertWithoutPageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPageInput, {nullable:true})
    @Type(() => UserUpdateWithoutPageInput)
    update?: UserUpdateWithoutPageInput;
}
