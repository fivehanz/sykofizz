import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageUpdateWithoutAuthorInput } from './page-update-without-author.input';
import { PageCreateWithoutAuthorInput } from './page-create-without-author.input';

@InputType()
export class PageUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;

    @Field(() => PageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PageUpdateWithoutAuthorInput)
    update!: PageUpdateWithoutAuthorInput;

    @Field(() => PageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PageCreateWithoutAuthorInput)
    create!: PageCreateWithoutAuthorInput;
}
