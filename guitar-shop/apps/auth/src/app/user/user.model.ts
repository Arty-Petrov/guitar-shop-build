import { User } from '@guitar-shop/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const USERS_COLLECTION_NAME = 'users';
@Schema({
  collection: USERS_COLLECTION_NAME,
  id: true
})
export class UserModel extends Document implements User {

  @Prop({
    required: true,
  })
  public name: string;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: false,
    default: false
  })
  public isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
