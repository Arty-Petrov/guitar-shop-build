import { UserVerifyCredentials } from '@guitar-shop/contracts';
import { RmqServiceName } from '@guitar-shop/shared-types';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable, tap } from 'rxjs';
import { createPattern } from './helpers';
import { RPCExceptionFilter } from './rpc.exception-filter';

@UseFilters(new RPCExceptionFilter())
@Injectable()
export class AuthLocalGuard implements CanActivate {
  constructor(@Inject(RmqServiceName.Auth) private authRmqClient: ClientProxy) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const loginData = this.getLoginData(context);
    return this.authRmqClient
      .send(createPattern(UserVerifyCredentials.topic),
        loginData
      )
      .pipe(
        tap((res) => {
          this.addUser(res, context);
        }),
        catchError(() => {
          throw new UnauthorizedException();
        }),
      );
  }

  private getLoginData(context: ExecutionContext) {
    let loginData: string;
    if (context.getType() === 'rpc') {
      loginData = context.switchToRpc().getData().request.body;
    } else if (context.getType() === 'http') {
      loginData = context.switchToHttp().getRequest().body;
    }
    if (!loginData) {
      throw new HttpException(
        'No value was provided for Authentication', HttpStatus.NO_CONTENT,
      );
    }
    return loginData;
  }

  private addUser(user: any, context: ExecutionContext) {
    if (context.getType() === 'rpc') {
      context.switchToRpc().getData().user = user;
    } else if (context.getType() === 'http') {
      context.switchToHttp().getRequest().user = user;
    }
  }
}
