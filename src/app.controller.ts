import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Quest } from 'types/quest';
import { Information } from 'types/story';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('quest')
  async getQuest(): Promise<Quest> {
    return await this.appService.getQuest();
  }

  @Get('information')
  async getInformation(): Promise<Information | null> {
    return await this.appService.getInformation();
  }
}