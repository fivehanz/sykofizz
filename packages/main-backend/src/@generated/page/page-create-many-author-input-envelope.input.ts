import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateManyAuthorInput } from './page-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class PageCreateManyAuthorInputEnvelope {

    @Field(() => [PageCreateManyAuthorInput], {nullable:false})
    @Type(() => PageCreateManyAuthorInput)
    data!: Array<PageCreateManyAuthorInput>;
}
