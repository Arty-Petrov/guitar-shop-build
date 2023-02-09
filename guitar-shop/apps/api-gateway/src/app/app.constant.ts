export const API_GATEWAY_SERVICE_ENV_PATH = 'apps/api-gateway/src/environments/.api-gateway.env';

export enum EnvValidationMessage {
  RMQHostRequired = 'RabbitMQ host is required',
  RMQUserRequired = 'RabbitMQ user is required',
  RMQPasswordRequired = 'RabbitMQ password is required',
  RMQAuthQueueRequired = 'RabbitMQ Auth Queue is required',
  RMQNotifyQueueRequired = 'RabbitMQ Notify Queue is required',
  RMQOrdersQueueRequired = 'RabbitMQ Orders Queue is required',
  RMQProductsQueueRequired = 'RabbitMQ Products Queue is required',
}
