import { AuthApi } from '@guitar-shop/contracts';
import { PickType } from '@nestjs/swagger';

export class UserLoginDto extends PickType(AuthApi, [
  'email', 'password'
] as const) {}
