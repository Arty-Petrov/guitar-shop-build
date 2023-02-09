import { RouteName } from '@guitar-shop/shared-types';
import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags(RouteName.Orders)
@Controller(RouteName.Orders)
export class OrdersController {
  constructor() {}

  @ApiResponse({})
  @Post()
  public async registerUser() {
  }
}
