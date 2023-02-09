import { PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { AuthApi } from './auth-api';

export namespace AuthGetToken {
  export const topic = 'user.token.command'

  export class Request extends PickType(AuthApi, [
    'id', 'name', 'email',
  ]){}

  export class Response extends PickType(AuthApi, [
    'token',
  ]){
    @Expose()
    public token;
  }
}
