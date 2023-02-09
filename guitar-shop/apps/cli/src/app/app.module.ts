import { Module } from '@nestjs/common';
import { CliLoggerService } from './cli-logger.service';
import { GenerateCommand } from './generate-command';

@Module({
  providers: [GenerateCommand, CliLoggerService],
})
export class AppModule {}
