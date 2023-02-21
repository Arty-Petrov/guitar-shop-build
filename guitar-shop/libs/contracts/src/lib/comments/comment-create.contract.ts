import { CommentsApi } from '@guitar-shop/contracts';
import { Comment } from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';


export namespace CommentCreate {
  export const topic = 'comment.create.command'

  export class Request extends PickType(CommentsApi, [
    'authorId', 'productId', 'advantages', 'disadvantages', 'text', 'evaluation'
  ]){}

  export class Response {
    product: Comment | null;
  }
}
