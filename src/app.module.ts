import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forRoot(
            {
                autoLoadEntities: true
            }
        ),
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService, UserService]
})
export class AppModule {
}
