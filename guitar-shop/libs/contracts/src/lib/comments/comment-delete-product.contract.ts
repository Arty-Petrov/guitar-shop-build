import { CommentsApi } from '@guitar-shop/contracts';
import { HttpStatus } from '@nestjs/common';
import { PickType } from '@nestjs/swagger';


export namespace CommentDeleteProduct {
  export const topic = 'comment.delete-product.command'

  export class Request extends PickType(CommentsApi, [
    'productId'
  ]){}

  export class Response {
    public response: HttpStatus.OK;
  }
}
