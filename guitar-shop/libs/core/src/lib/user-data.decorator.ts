import { User } from '@guitar-shop/shared-types';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getUserDataByContext = (context: ExecutionContext): User => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const UserData = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getUserDataByContext(context),
);
