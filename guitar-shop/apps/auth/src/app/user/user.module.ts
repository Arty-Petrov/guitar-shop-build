import { RmqServiceName } from '@guitar-shop/shared-types';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { getRabbitMqConfig } from '../../config/rabbitmq.config';
import { AuthModule } from '../auth/auth.module';
import { UserModel, UserSchema } from './user.model';
import UserRepository from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },

    ]),
    ClientsModule.registerAsync([
      {
        name: RmqServiceName.Notify,
        useFactory: getRabbitMqConfig.Notify,
        inject: [ConfigService]
      }
    ]),
    forwardRef(() => AuthModule)
  ],
  controllers: [],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
