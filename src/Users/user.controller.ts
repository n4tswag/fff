import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.schema';

@ApiTags('api/users')
@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: User })
  @ApiBody({ type: CreateUserDto, required: true })
  @Post('create')
  create(@Body() body: CreateUserDto): Promise<User> {
    console.log('userDto');
    console.log(body);
    return this.userService.createUser(body);
  }
  @ApiOperation({ summary: 'Users view' })
  @ApiResponse({ status: 201, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
