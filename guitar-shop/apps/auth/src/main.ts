import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { getRabbitMqConfig } from './config/rabbitmq.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  app.connectMicroservice(getRabbitMqConfig.Auth(configService));

  await app.startAllMicroservices();

  app.useGlobalPipes(new ValidationPipe({
    skipUndefinedProperties: true
  }));
  await app.init();
  Logger.log(
    `🚀 Auth application is running`
  );
}

bootstrap();
