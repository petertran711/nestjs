import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [UserController],
    imports: [
        TypeOrmModule.forFeature()
    ]
})
export class UserModule {
}
