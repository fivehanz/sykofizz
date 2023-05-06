import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PageCountOrderByAggregateInput } from './page-count-order-by-aggregate.input';
import { PageMaxOrderByAggregateInput } from './page-max-order-by-aggregate.input';
import { PageMinOrderByAggregateInput } from './page-min-order-by-aggregate.input';

@InputType()
export class PageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PageCountOrderByAggregateInput, {nullable:true})
    _count?: PageCountOrderByAggregateInput;

    @Field(() => PageMaxOrderByAggregateInput, {nullable:true})
    _max?: PageMaxOrderByAggregateInput;

    @Field(() => PageMinOrderByAggregateInput, {nullable:true})
    _min?: PageMinOrderByAggregateInput;
}
