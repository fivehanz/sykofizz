import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateWithoutAuthorInput } from './page-create-without-author.input';
import { Type } from 'class-transformer';
import { PageCreateOrConnectWithoutAuthorInput } from './page-create-or-connect-without-author.input';
import { PageUpsertWithWhereUniqueWithoutAuthorInput } from './page-upsert-with-where-unique-without-author.input';
import { PageCreateManyAuthorInputEnvelope } from './page-create-many-author-input-envelope.input';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { PageUpdateWithWhereUniqueWithoutAuthorInput } from './page-update-with-where-unique-without-author.input';
import { PageUpdateManyWithWhereWithoutAuthorInput } from './page-update-many-with-where-without-author.input';
import { PageScalarWhereInput } from './page-scalar-where.input';

@InputType()
export class PageUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [PageCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateWithoutAuthorInput)
    create?: Array<PageCreateWithoutAuthorInput>;

    @Field(() => [PageCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PageCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PageCreateOrConnectWithoutAuthorInput>;

    @Field(() => [PageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PageUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => PageCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PageCreateManyAuthorInputEnvelope)
    createMany?: PageCreateManyAuthorInputEnvelope;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    set?: Array<PageWhereUniqueInput>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    disconnect?: Array<PageWhereUniqueInput>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    delete?: Array<PageWhereUniqueInput>;

    @Field(() => [PageWhereUniqueInput], {nullable:true})
    @Type(() => PageWhereUniqueInput)
    connect?: Array<PageWhereUniqueInput>;

    @Field(() => [PageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PageUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PageUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PageUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    @Type(() => PageScalarWhereInput)
    deleteMany?: Array<PageScalarWhereInput>;
}
