import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { ServiceModule } from './controller/service/service.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ServiceModule, UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
