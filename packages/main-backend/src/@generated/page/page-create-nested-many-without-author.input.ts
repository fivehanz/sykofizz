import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateWithoutAuthorInput } from './page-create-without-author.input';
import { Type } from 'class-transformer';
import { PageCreateOrConnectWithoutAuthorInput } from './page-create-or-connect-without-author.input';
import { PageCreateManyAuthorInputEnvelope } from './page-create-many-author-input-envelope.input';
import { PageWhereUniqueInput } from './page-where-unique.input';

@InputType()
export class PageCreateNestedManyWithoutAuthorInput {

    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;

    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;

    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: PageCreateManyAuthorInputEnvelope;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;
}
