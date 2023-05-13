import { Injectable } from '@nestjs/common';
import { CreateOnePostArgs } from '../@generated/post/create-one-post.args';
import { PrismaService } from '../prisma/prisma.service';
import { FindUniquePostArgs } from '../@generated/post/find-unique-post.args';
import { UpdateOnePostArgs } from '../@generated/post/update-one-post.args';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new post with the given data.
   *
   * @param {CreateOnePostArgs} data - The data to create the post with.
   * @return {Promise<Post>} - The created post.
   */
  create(data: CreateOnePostArgs) {
    return this.prisma.post.create(data);
  }

  /**
   * Finds all posts.
   *
   * @return {Promise<Post[]>} A promise that resolves to an array of Post objects.
   */
  findAll() {
    return this.prisma.post.findMany();
  }

  /**
   * Retrieves a single post based on the provided arguments.
   *
   * @param {FindUniquePostArgs} post - The arguments used to find a specific post.
   * @return {Promise<Post>} Returns a Promise that resolves to a Post if found, or null if not found.
   */
  findOne(post: FindUniquePostArgs) {
    return this.prisma.post.findUnique(post);
  }

  /**
   * Updates a single post in the database.
   *
   * @param {UpdateOnePostArgs} data - The data needed to update the post.
   * @returns {Promise<Post>} The updated post.
   */
  update(data: UpdateOnePostArgs) {
    return this.prisma.post.update(data);
  }

  /**
   * Removes a post from the database.
   *
   * @param {FindUniquePostArgs} post - The unique identifier(s) of the post to remove.
   * @return {Promise<Post>} - The removed post.
   */
  remove(post: FindUniquePostArgs) {
    return this.prisma.post.delete(post);
  }
}
