import { plainToInstance } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';
import { EnvValidationMessage } from './app.constant';


class EnvironmentsConfig {
  @IsString({
    message: EnvValidationMessage.RMQUserRequired
  })
  public RABBIT_USER: string;

  @IsString({
    message: EnvValidationMessage.RMQPasswordRequired
  })
  public RABBIT_PASSWORD: string;

  @IsString({
    message: EnvValidationMessage.RMQHostRequired
  })
  public RABBIT_HOST: string;

  @IsString({
    message: EnvValidationMessage.RMQAuthQueueRequired
  })
  public RABBIT_AUTH_SERVICE_QUEUE: string;

  @IsString({
    message: EnvValidationMessage.RMQNotifyQueueRequired
  })
  public RABBIT_NOTIFY_SERVICE_QUEUE: string;

  @IsString({
    message: EnvValidationMessage.RMQOrdersQueueRequired
  })
  public RABBIT_ORDERS_SERVICE_QUEUE: string;

  @IsString({
    message: EnvValidationMessage.RMQProductsQueueRequired
  })
  public RABBIT_PRODUCTS_SERVICE_QUEUE: string;
}

export function validateEnvironments(config: Record<string, unknown>) {
  const environmentsConfig = plainToInstance(
    EnvironmentsConfig,
    config,
    { enableImplicitConversion: true  },
  );

  const errors = validateSync(
    environmentsConfig, {
      skipMissingProperties: false
    }
  );

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}
