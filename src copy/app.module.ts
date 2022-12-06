import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import 'reflect-metadata';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './Users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(`${process.env.DB_URL}`),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
