export const PRODUCTS_SERVICE_ENV_PATH = 'apps/products/src/environments/.products.env';

export const enum EnvValidationMessage {
  RMQHostRequired = 'RabbitMQ host is required',
  RMQUserRequired = 'RabbitMQ user is required',
  RMQPasswordRequired = 'RabbitMQ password is required',
  RMQAuthQueueRequired = 'RabbitMQ Auth Queue is required',
  RMQNotifyQueueRequired = 'RabbitMQ Notify Queue is required',
  RMQOrdersQueueRequired = 'RabbitMQ Orders Queue is required',
  RMQProductsQueueRequired = 'RabbitMQ Products Queue is required',
}
