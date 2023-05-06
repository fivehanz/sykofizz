import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageUpdateWithoutAuthorInput } from './page-update-without-author.input';

@InputType()
export class PageUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;

    @Field(() => PageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PageUpdateWithoutAuthorInput)
    data!: PageUpdateWithoutAuthorInput;
}
