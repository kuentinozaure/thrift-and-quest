import { Controller, Get } from '@nestjs/common';
import { QuestService } from 'src/services/quest.service';
import { Quest } from 'types/quest';

@Controller('quest')
export class QuestController {
    constructor(private readonly questService: QuestService) {}

    @Get()
    public async getQuest(): Promise<Quest> {
        return await this.questService.getQuest();
    }
}
