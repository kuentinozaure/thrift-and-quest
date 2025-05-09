import { Injectable } from "@nestjs/common";
import { QuestWizardAgent } from "agents/quest-wizard.agent";
import { Quest } from "types/quest";

@Injectable()
export class QuestService {
  async getQuest(): Promise<Quest> {
    return await QuestWizardAgent({
      clothingStyle: ['Rock', 'Jean', 'workwear'] // TODO: pass data from db (not yet implemented)
    })
  }
}