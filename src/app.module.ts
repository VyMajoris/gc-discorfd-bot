import { BotModule } from './bot/bot.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), BotModule],
  controllers: [UsersController, AppController],
  providers: [AppService],
})
export class AppModule {}
