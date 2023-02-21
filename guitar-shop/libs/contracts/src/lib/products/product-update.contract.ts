import { Product } from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ProductsApi } from './products-api';


export namespace ProductUpdate {
  export const topic = 'product.update.command'

  export class Request extends PickType(ProductsApi, [
    'id', 'title', 'description', 'guitarType', 'stringCount', 'article', 'price'
  ]){
    @IsOptional()
    public title;

    @IsOptional()
    public description;

    @IsOptional()
    public guitarType;

    @IsOptional()
    public stringCount;

    @IsOptional()
    public article;

    @IsOptional()
    public price;

    @IsOptional()
    public imageUrl;
  }

  export class Response {
    product: Product | null;
  }
}
