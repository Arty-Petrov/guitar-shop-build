import { HttpStatus } from '@nestjs/common';
import { PickType } from '@nestjs/swagger';
import { ProductsApi } from './products-api';


export namespace ProductDelete {
  export const topic = 'product.delete.command'

  export class Request extends PickType(ProductsApi, [
    'id'
  ]){}

  export class Response {
    public response: HttpStatus.OK;
  }
}
