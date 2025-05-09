import { Injectable } from '@nestjs/common';
import { QuestWizardAgent } from 'agents/quest-wizard.agent';
import { objectInformationGenerator } from 'agents/tools/object-information-generator.tool';
import { TEST_IMAGE } from 'constants/test-image.constant';
import { Quest } from 'types/quest';
import { Information } from 'types/story';

@Injectable()
export class AppService {
  async getQuest(): Promise<Quest> {
    return await QuestWizardAgent({
      clothingStyle: ['Rock', 'Jean', 'workwear']
    })
  }

  async getInformation(): Promise<Information | null> {
    return await objectInformationGenerator(TEST_IMAGE);
  }

}
