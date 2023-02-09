import { RouteName } from '@guitar-shop/shared-types';
import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags(RouteName.Products)
@Controller(RouteName.Products)
export class ProductsController {
  constructor() {}

  @ApiResponse({})
  @Post()
  public async createProduct() {
  }
}
