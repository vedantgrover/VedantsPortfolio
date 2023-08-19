import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { messages } = req.body;

  const chat_completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: messages,
  });

  let response = chat_completion.choices[0].message.content;

  res.status(200).json({ text: response });
}
