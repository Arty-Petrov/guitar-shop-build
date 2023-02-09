import { Command, CommandRunner } from 'nest-commander';
import { CliLoggerService } from './cli-logger.service';


@Command({ name: 'generate', description: 'Products db seeder' })
export class GenerateCommand extends CommandRunner {
  constructor(private readonly logService: CliLoggerService) {
    super()
  }

  async run(
    passedParam: string[],
  ): Promise<void> {
      this.runWithNone(passedParam);
  }

  runWithNone(param: string[]): void {
    this.logService.log({ param });
  }
}
