import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(dto: CreateUserDto): Promise<UserDocument> {
    console.log(dto);
    const newUser = new this.userModel(dto);
    // newUser.email = dto.email;
    // newUser.password = dto.password;
    console.log(newUser);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find({});
    return users;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }
}
