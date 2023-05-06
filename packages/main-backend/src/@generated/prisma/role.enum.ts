import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    AUTHOR = "AUTHOR",
    USER = "USER"
}


registerEnumType(Role, { name: 'Role', description: undefined })
