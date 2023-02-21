import { RmqServiceName } from '@guitar-shop/shared-types';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { getRabbitMqConfig } from '../../config/rabbitmq.config';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: RmqServiceName.Auth,
        useFactory: getRabbitMqConfig.Auth,
        inject: [ConfigService]
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
