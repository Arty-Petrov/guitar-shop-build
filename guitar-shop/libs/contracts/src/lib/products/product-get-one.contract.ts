import { Product } from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';
import { ProductsApi } from './products-api';


export namespace ProductGetOne {
  export const topic = 'product.get-one.query'

  export class Request extends PickType(ProductsApi, [
    'id'
  ]){}

  export class Response {
    product: Product | null;
  }
}
