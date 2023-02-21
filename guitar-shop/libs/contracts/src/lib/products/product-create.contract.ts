import { Product } from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';
import { ProductsApi } from './products-api';


export namespace ProductCreate {
  export const topic = 'product.create.command'

  export class Request extends PickType(ProductsApi, [
    'title', 'description', 'guitarType', 'stringCount', 'article', 'price'
  ]){}

  export class Response {
    product: Product | null;
  }
}
