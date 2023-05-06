import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageCountAggregate } from './page-count-aggregate.output';
import { PageMinAggregate } from './page-min-aggregate.output';
import { PageMaxAggregate } from './page-max-aggregate.output';

@ObjectType()
export class PageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PageCountAggregate, {nullable:true})
    _count?: PageCountAggregate;

    @Field(() => PageMinAggregate, {nullable:true})
    _min?: PageMinAggregate;

    @Field(() => PageMaxAggregate, {nullable:true})
    _max?: PageMaxAggregate;
}
