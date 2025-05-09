import { QuestGoal } from "enums/quest-goal.enum";

export type Quest =  {
    goal: string;
    status: QuestGoal;
}