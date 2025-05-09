import { Injectable } from '@nestjs/common';
import { QuestWizardAgent } from 'agents/quest-wizard.agent';
import { QuestGoal } from 'enums/quest-goal.enum';
import { Quest } from 'types/quest';

@Injectable()
export class AppService {
  async getQuest(): Promise<Quest> {
    return await QuestWizardAgent({
      clothingStyle: ['Rock', 'Jean', 'workwear']
    })
  }
}
