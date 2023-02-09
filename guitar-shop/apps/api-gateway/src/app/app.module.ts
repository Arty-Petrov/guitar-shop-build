import { RmqServiceName } from '@guitar-shop/shared-types';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { getRabbitMqConfig, rabbitMqOptions } from '../config/rabbitmq.config';
import { API_GATEWAY_SERVICE_ENV_PATH } from './app.constant';
import { AuthController } from './auth/auth.controller';
// import { AuthModule } from "./auth/auth";
import { validateEnvironments } from './env.valitation';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: API_GATEWAY_SERVICE_ENV_PATH,
      load: [rabbitMqOptions],
      validate: validateEnvironments,
    }),
    ClientsModule.registerAsync([
      {
        name: RmqServiceName.Auth,
        useFactory: getRabbitMqConfig.Auth,
        inject: [ConfigService]
      },
      {
        name: RmqServiceName.Notify,
        useFactory: getRabbitMqConfig.Notify,
        inject: [ConfigService]
      },
      {
        name: RmqServiceName.Orders,
        useFactory: getRabbitMqConfig.Orders,
        inject: [ConfigService]
      },
      {
        name: RmqServiceName.Products,
        useFactory: getRabbitMqConfig.Product,
        inject: [ConfigService]
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
