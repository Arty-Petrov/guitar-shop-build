import { RouteName } from '@guitar-shop/shared-types';
import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags(RouteName.Notify)
@Controller(RouteName.Notify)
export class NotifyController {
  constructor() {}

  @ApiResponse({})
  @Post('send')
  public async send() {
  }
}
