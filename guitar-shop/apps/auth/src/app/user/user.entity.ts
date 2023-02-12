import { User } from '@guitar-shop/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from '../app.constant';

export class UserEntity implements User {
  public id: string;
  public email: string;
  public name: string;
  public passwordHash: string;
  public dateBirth: Date;
  public isAdmin: boolean;

  constructor(user: User) {
    this.fillEntity(user);
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.isAdmin = user.isAdmin;
    this.passwordHash = user.passwordHash;
  }
}
