import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/openai";

async function sendEmail(name: string, email: string) {
  console.log("Email Sending Function called!bn");
  return "Successfully sent content information to Vedant!n";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { messages } = req.body;
  let messagesToSend = [...messages];

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: messagesToSend,
    functions: [
      {
        name: "sendEmail",
        description:
          "Sends me an email with the contact information of the person who wants to talk/contact/connect with me.",
        parameters: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The person's name.",
            },
            email: {
              type: "string",
              description: "The person's email",
            },
          },
          required: ["name", "email"],
        },
      },
    ],
    function_call: "auto",
  });

  let completionResponse = chatCompletion.choices[0].message;
  // console.log(completionResponse);

  let functionResponse = null;
  if (!completionResponse.content) {
    const functionCallName = completionResponse.function_call?.name;
    console.log(functionCallName);

    if (functionCallName === "sendEmail") {
      const completionArguments = JSON.parse(
        completionResponse.function_call?.arguments!
      );

      const completionText = await sendEmail(
        completionArguments.name,
        completionArguments.email
      );

      functionResponse = {
        role: "function",
        name: "sendEmail",
        content: completionText,
      };

      messagesToSend.push(functionResponse);

      const secondChatResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: messagesToSend,
      });

      completionResponse = secondChatResponse.choices[0].message;
    }
  }

  console.log(completionResponse);

  res.status(200).json({
    functionResponse: functionResponse,
    text: completionResponse.content,
  });
}
