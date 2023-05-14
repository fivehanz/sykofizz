import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';
import { Type } from 'class-transformer';
import { PageOrderByWithRelationInput } from './page-order-by-with-relation.input';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageCountAggregateInput } from './page-count-aggregate.input';
import { PageMinAggregateInput } from './page-min-aggregate.input';
import { PageMaxAggregateInput } from './page-max-aggregate.input';

@ArgsType()
export class PageAggregateArgs {

    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: PageWhereInput;

    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;

    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: PageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PageCountAggregateInput, {nullable:true})
    _count?: PageCountAggregateInput;

    @Field(() => PageMinAggregateInput, {nullable:true})
    _min?: PageMinAggregateInput;

    @Field(() => PageMaxAggregateInput, {nullable:true})
    _max?: PageMaxAggregateInput;
}