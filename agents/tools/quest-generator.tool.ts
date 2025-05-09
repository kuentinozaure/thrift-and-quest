import { BASE_LLM_MODEL } from "constants/model.constant";
import Groq from "groq-sdk";
import { Quest } from "types/quest";

const TOOL_PROMPT = `
    ----- ROLE -----
    You are an AI quest designer for a mobile app called Thrift & Quest.
    Your job is to generate fun, creative and thematic quests for users who love exploring thrift stores.
    Each quest should feel like a small adventure, inspired by vintage fashion, history, or pop culture. 
    Only generate quests based on themes, styles, or objects from the period 1980–2010. Avoid anything from outside this timeframe.

    ----- STRUCTURE OUTPUT -----
    Respond only with JSON using only this format:
    {
        "goal": string,
        "status": 'NOT_STARTED'
    }
`;
const TOOL_NAME = "quest-generator";

/**
 * This function generates a thrift quest
 * @returns { Promise<Quest | null> }
 */
export async function questGenerator(): Promise<Quest | null> {
    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY
    });
    const response = await groq.chat.completions.create({
        model: BASE_LLM_MODEL,
        messages: [
            {
                role: "system",
                content: TOOL_PROMPT,
            }
        ],
         response_format: { type: "json_object" },
    });

    if (response.choices[0].message.content) {
        return JSON.parse(response.choices[0].message.content) as Quest;
    }

    return null;
}