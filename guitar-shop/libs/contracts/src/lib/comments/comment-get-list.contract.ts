import { CommentsApi } from '@guitar-shop/contracts';
import { PickType } from '@nestjs/swagger';


export namespace CommentGetList {
  export const topic = 'comment.get-list.query'

  export class Request extends PickType(CommentsApi, [
    'productId'
  ]){}

  export class Response {
    comments: Comment[];
  }
}
