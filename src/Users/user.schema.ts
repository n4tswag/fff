import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  /*@ApiProperty({ example: '1', description: 'ID' })
  @Prop({ unique: true })
  _id: mongoose.Schema.Types.ObjectId;*/

  @ApiProperty({
    example: 'user@gmail.com',
    description: 'e-mail',
  })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({
    example: '123456789',
    description: 'password',
  })
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
