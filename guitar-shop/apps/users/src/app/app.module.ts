import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module.js';
import { UserModule } from './user/user.module.js';

@Module({
  imports: [UserModule, AuthModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
