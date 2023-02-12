export const AUTH_SERVICE_ENV_PATH = 'apps/auth/src/environments/.auth.env';
export const SALT_ROUNDS = 10;

export const enum EnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required',
  RMQHostRequired = 'RabbitMQ host is required',
  RMQUserRequired = 'RabbitMQ user is required',
  RMQPasswordRequired = 'RabbitMQ password is required',
  RMQAuthQueueRequired = 'RabbitMQ Auth Queue is required',
  RMQNotifyQueueRequired = 'RabbitMQ Notify Queue is required',
}
