import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { QuestController } from './controllers/quest.controller';
import { InformationController } from './controllers/information.contoller';
import { QuestService } from './services/quest.service';
import { InformationService } from './services/information.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, QuestController, InformationController],
  providers: [AppService, QuestService, InformationService],
})
export class AppModule {}
