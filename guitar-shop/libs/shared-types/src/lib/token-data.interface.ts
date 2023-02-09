import { User } from './user.interface';

export interface TokenData extends Pick<User, 'email' | 'name'> {
  sub: string;
}
