import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Quest } from 'types/quest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getQuest(): Promise<Quest> {
    return await this.appService.getQuest();
  }
}
