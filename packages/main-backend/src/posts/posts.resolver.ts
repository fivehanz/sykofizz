import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from '../@generated/post/post.model';
import { PostCreateInput } from '../@generated/post/post-create.input';
import { PostWhereUniqueInput } from '../@generated/post/post-where-unique.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args('post') data: PostCreateInput) {
    return this.postsService.create({ data });
  }

  // @Query(() => [Post], { name: 'posts' })
  // findAll() {
  //   return this.postsService.findAll();
  // }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('post') post: PostWhereUniqueInput) {
    return this.postsService.findOne({ where: post });
  }

  // @Mutation(() => Post)
  // updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
  //   return this.postsService.update(updatePostInput.id, updatePostInput);
  // }

  // @Mutation(() => Post)
  // removePost(@Args('id', { type: () => Int }) id: number) {
  //   return this.postsService.remove(id);
  // }
}
