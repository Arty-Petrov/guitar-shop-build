import { UserRegister, UserVerifyCredentials } from '@guitar-shop/contracts';
import { AuthApiError, RmqServiceName, User } from '@guitar-shop/shared-types';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserEntity } from './user.entity';
import UserRepository from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    @Inject(RmqServiceName.Notify) private readonly notifyRmqClient: ClientProxy,
  ) {}

  public async create(dto: UserRegister.Request): Promise<User | null>  {
    const { email, password } = dto;

    const existUser = await this.userRepository.findByEmail(email);
    if (existUser) {
      throw new HttpException(`User with email: ${email} already exist`, HttpStatus.CONFLICT)
    }

    const userEntity = await new UserEntity({...dto, passwordHash: ''})
      .setPassword(password);

    return await this.userRepository.create(userEntity);
  }

  public async verifyUser (
    dto: UserVerifyCredentials.Request
  ): Promise<UserVerifyCredentials.Response> {
    const {
      email, password
    } = dto;
    const existUser = await this.getByEmail(email);
    if (!existUser) {
      throw new HttpException(AuthApiError.NotFound, HttpStatus.NOT_FOUND);
    }

    const userEntity = new UserEntity(existUser);
    if (! await userEntity.comparePassword(password)) {
      throw new HttpException(AuthApiError.PasswordIsWrong, HttpStatus.UNAUTHORIZED);
    }

    return userEntity;
  }

  public async getByEmail(email: string): Promise<User | null>  {
    const existUser = await this.userRepository.findByEmail(email);
    if (!existUser) {
      throw new HttpException(AuthApiError.NotFound, HttpStatus.NOT_FOUND);
    }
    return existUser;
  }
}
