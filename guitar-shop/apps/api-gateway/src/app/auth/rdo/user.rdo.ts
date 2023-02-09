import { AuthApiDescription, InputExample } from '@guitar-shop/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: AuthApiDescription.Id,
    example: InputExample.MongoId,
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: AuthApiDescription.Email,
    example: InputExample.Email,
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: AuthApiDescription.Name,
    example: InputExample.Name,
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: AuthApiDescription.Token,
    example: InputExample.Token,
  })
  @Expose()
  public token: string;
}
