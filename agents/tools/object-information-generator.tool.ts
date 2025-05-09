import { BASE_VISION_MODEL } from 'constants/model.constant';
import Groq from 'groq-sdk';
import { Information } from 'types/story';

const TOOL_PROMPT = `
    ----- ROLE -----
    You are an AI object information generator for an app called Thrift & Quest.
    Your job is to generate information for objects found in thrift stores.
    The image passed to you should be the object the user want to generate information for.
    The information is basically a quick description of the product, where it was found, and its history.

    For example: User show you a vintage ACDC tee shirt with 'back in black' in a thrift store, you must quickly explain what is this
    shirt and its significance. You can add also some info about the song, the album, and the band.

    ----- STRUCTURE OUTPUT -----
    Respond only with JSON using only this format:
    {
        "information": string
    }
`;

export async function objectInformationGenerator(
  base64Image: string,
): Promise<Information | null> {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });
  const response = await groq.chat.completions.create({
    model: BASE_VISION_MODEL,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: TOOL_PROMPT },
          {
            type: 'image_url',
            image_url: {
              url: base64Image,
            },
          },
        ],
      },
    ],
    response_format: { type: 'json_object' },
  });

  if (response.choices[0].message.content) {
    console.log(response.choices[0].message.content);
    return JSON.parse(response.choices[0].message.content) as Information;
  }

  return null;
}
