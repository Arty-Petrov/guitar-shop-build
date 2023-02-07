import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [SubscriberModule, SenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
