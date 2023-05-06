import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPageInput } from './user-create-without-page.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPageInput } from './user-create-or-connect-without-page.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPageInput {

    @Field(() => UserCreateWithoutPageInput, {nullable:true})
    @Type(() => UserCreateWithoutPageInput)
    create?: UserCreateWithoutPageInput;

    @Field(() => UserCreateOrConnectWithoutPageInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPageInput)
    connectOrCreate?: UserCreateOrConnectWithoutPageInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
