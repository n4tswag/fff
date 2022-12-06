import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'e-mail' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({ message: 'Incorrect e-mail' })
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, {
    message:
      'Password must contain at least 4 symbols and can not be bigger than 16',
  })
  readonly password: string;
}
