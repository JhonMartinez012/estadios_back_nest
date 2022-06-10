import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StadiumModule } from './stadium/stadium.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { UserModule } from './user/user.module';
import { LocalStrategy } from './auth/local.strategy';

@Module({
  imports: [StadiumModule, AuthModule, AdminModule, ConfigurationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
