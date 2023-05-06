import { registerEnumType } from '@nestjs/graphql';

export enum PageScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    slug = "slug",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PageScalarFieldEnum, { name: 'PageScalarFieldEnum', description: undefined })
