import { AuthGetToken, AuthValidateToken, UserRegister, UserVerifyCredentials } from '@guitar-shop/contracts';
import { createPattern, fillObject } from '@guitar-shop/core';
import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RPCExceptionFilter } from '../../../../../libs/core/src/lib/rpc.exception-filter';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@UseFilters(new RPCExceptionFilter())
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @MessagePattern(createPattern(UserRegister.topic))
  public async registerUser(
    @Payload() dto: UserRegister.Request
  ): Promise<UserRegister.Response> {
    const user = await this.userService.create(dto);
    const u2ser = fillObject(UserRegister.Response, user);
    console.log(UserRegister.topic, {...u2ser});
    return u2ser
  }

  @MessagePattern(createPattern(UserVerifyCredentials.topic))
  public async verifyUserCredentials(
    @Payload() dto: UserVerifyCredentials.Request
  ): Promise<UserVerifyCredentials.Response> {
    const user = await this.userService.verifyUser(dto);
    return fillObject(UserVerifyCredentials.Response, user);
  }

  @MessagePattern(createPattern(AuthGetToken.topic))
  public async getToken(
    @Payload() dto: AuthGetToken.Request
  ): Promise<AuthGetToken.Response> {
    const user = await this.authService.generateToken(dto);
    return fillObject(AuthGetToken.Response, user);
  }

  @MessagePattern(createPattern(AuthValidateToken.topic))
  public async validateAuthToken(
    @Payload() dto: AuthValidateToken.Request
  ): Promise<AuthValidateToken.Response> {
    const tokenData = await this.authService.getTokenData(dto);
    return fillObject(AuthValidateToken.Response, tokenData);
  }
}
