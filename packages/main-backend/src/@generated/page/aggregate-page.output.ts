import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PageCountAggregate } from './page-count-aggregate.output';
import { PageMinAggregate } from './page-min-aggregate.output';
import { PageMaxAggregate } from './page-max-aggregate.output';

@ObjectType()
export class AggregatePage {

    @Field(() => PageCountAggregate, {nullable:true})
    _count?: PageCountAggregate;

    @Field(() => PageMinAggregate, {nullable:true})
    _min?: PageMinAggregate;

    @Field(() => PageMaxAggregate, {nullable:true})
    _max?: PageMaxAggregate;
}
