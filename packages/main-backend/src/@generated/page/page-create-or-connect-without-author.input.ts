import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageCreateWithoutAuthorInput } from './page-create-without-author.input';

@InputType()
export class PageCreateOrConnectWithoutAuthorInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;

    @Field(() => PageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PageCreateWithoutAuthorInput)
    create!: PageCreateWithoutAuthorInput;
}
