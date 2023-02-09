import { AuthApi } from '@guitar-shop/contracts';
import { ApiProperty, PickType } from '@nestjs/swagger';

export default class UserRegisterDto extends PickType(AuthApi,
  ['email', 'name', 'password']
) {
  @ApiProperty({required: true})
  public email;

  @ApiProperty({required: true})
  public name;

  @ApiProperty({required: true})
  public password;
}
