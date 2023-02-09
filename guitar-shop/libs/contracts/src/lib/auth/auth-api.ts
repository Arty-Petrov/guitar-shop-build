import {
  AuthApiDescription,
  AuthApiError,
  InputExample,
  UserNameLength,
  UserPasswordLength,
} from '@guitar-shop/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMongoId, IsNumber, Length } from 'class-validator';

export class AuthApi {
  @ApiProperty({
    description: AuthApiDescription.Id,
    example: InputExample.MongoId
  })
  @IsMongoId()
  public id: string;

  @ApiProperty({
    description: AuthApiDescription.Email,
    example: InputExample.Email,
  })
  @IsEmail(
    {},
    {message: AuthApiError.EmailNotValid},
  )
  public email: string;

  @ApiProperty({
    description: AuthApiDescription.Name,
    example: InputExample.Name,
  })
  @Length(
    UserNameLength.Min,
    UserNameLength.Max,
    {
      message: AuthApiError.NameNotValid
    })
  public name: string;

  @ApiProperty({
    description: AuthApiDescription.isAdmin,
  })
  @IsNumber()
  public isAdmin: boolean;

  @ApiProperty({
    description: AuthApiDescription.Password,
    example: InputExample.Password,
  })
  @Length(
    UserPasswordLength.Min,
    UserPasswordLength.Max,
    {
      message: AuthApiError.PasswordNotValid
    })
  public password: string;

  @ApiProperty({
    description: AuthApiDescription.Token,
    example: InputExample.Token,
  })
  public token: string;
}
