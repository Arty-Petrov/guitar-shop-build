import { PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { AuthApi } from './auth-api';


export namespace UserRegister {
  export const topic = 'user.register.command'

  export class Request extends PickType(AuthApi, [
    'name', 'email', 'password'
  ]){}

  export class Response extends PickType(AuthApi, [
    'id', 'name', "email",
  ]){
    @Expose()
    public id;

    @Expose()
    public name;


    @Expose()
    public email;
  }
}
