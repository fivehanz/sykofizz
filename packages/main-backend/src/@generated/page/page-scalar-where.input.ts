import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PageScalarWhereInput {

    @Field(() => [PageScalarWhereInput], {nullable:true})
    AND?: Array<PageScalarWhereInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    OR?: Array<PageScalarWhereInput>;

    @Field(() => [PageScalarWhereInput], {nullable:true})
    NOT?: Array<PageScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => UuidFilter, {nullable:true})
    authorId?: UuidFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}