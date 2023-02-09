import { AuthGetToken, AuthValidateToken, UserRegister } from '@guitar-shop/contracts';
import { AuthJwtGuard, AuthLocalGuard, createPattern, fillObject, UserData } from '@guitar-shop/core';
import { RmqServiceName, RouteName } from '@guitar-shop/shared-types';
import { Body, Controller, Get, HttpStatus, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBody,
  ApiConflictResponse,
  ApiNotAcceptableResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { lastValueFrom } from 'rxjs';
import { UserLoginDto } from './dto/user-login.dto';
import UserRegisterDto from './dto/user-register.dto';
import { UserLoggedRdo } from './rdo/user-logged.rdo';
import { UserRdo } from './rdo/user.rdo';

@ApiTags(RouteName.Auth)
@Controller(RouteName.Auth)
export class AuthController {
  constructor(
    @Inject(RmqServiceName.Auth) private readonly authRmqClient: ClientProxy,
  ) {}

  @Post('register')
  @ApiBody({
    type: UserRegisterDto,
    description: 'Create user\'s record'
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: UserLoggedRdo,
    description: 'The new user has been successfully created.'
  })
  @ApiConflictResponse({
    status: HttpStatus.CONFLICT,
    description: 'The user with this email exists.'
  })
  public async registerUser(
    @Body() dto: UserRegisterDto
  ): Promise<UserRdo> {
    const user = await lastValueFrom(
      await this.authRmqClient
      .send<UserRegister.Request>(
        createPattern(UserRegister.topic), dto))
    console.log(user);
      return fillObject(UserRdo, user)
  }

  @Post('login')
  @UseGuards(AuthLocalGuard)
  @ApiBody({
    type: UserLoginDto,
    description: 'Login user'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserLoggedRdo,
    description: 'User is logged.'
  })
  @ApiUnauthorizedResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User\'s token is invalid.'
  })
  async login(
    @UserData() dto: AuthGetToken.Request
  ) {
    const userLogged = await lastValueFrom(
      await this.authRmqClient
        .send<AuthGetToken.Request>(
          createPattern(AuthGetToken.topic), dto))
    console.log('login', {...userLogged});
    return fillObject(UserLoggedRdo, userLogged)
  }

  @Get('login')
  @UseGuards(AuthJwtGuard)
  @ApiBody({
    description: 'Validate Auth token'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Auth token is valid.'
  })
  @ApiNotAcceptableResponse({
    status: HttpStatus.NOT_ACCEPTABLE,
    description: 'Auth token is invalid.'
  })
  private async getAuthStatus(
    @UserData() dto: AuthValidateToken.Response,
  ): Promise<AuthValidateToken.Response> {
    return fillObject(UserRdo, dto);
  };
}
