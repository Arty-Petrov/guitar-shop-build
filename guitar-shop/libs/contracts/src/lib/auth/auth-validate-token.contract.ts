import { PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { AuthApi } from './auth-api';

export namespace AuthValidateToken {
  export const topic = 'auth.validate-token.command'

  export class Request extends PickType(AuthApi, [
    'token'
  ]){}

  export class Response extends PickType(AuthApi, [
    'id', 'name', 'email', 'token'
  ]){
    @Expose()
    public id;

    @Expose()
    public name;

    @Expose()
    public email;

    @Expose()
    public token;
  }
}
