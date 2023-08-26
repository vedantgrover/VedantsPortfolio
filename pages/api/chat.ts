import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/openai";

async function sendEmail(name: string, email: string) {
  let baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://vedantgrover.com"
      : "http://localhost:3000";
  console.log("Email Sending Function called! " + name + " " + email);
  const response = await fetch(
    `${baseUrl}/api/email?email=${email}&name=${name}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(
    `${baseUrl}/api/email?email=${email}&name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    return "I apologize but something went wrong when emailing Vedant.";
  }

  return "Successfully sent content information to Vedant!";
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
          "Sends Vedant and email with information about the person who wants to contact him.",
        parameters: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description:
                "The name of the person who is trying to contact Vedant. This is required.",
            },
            email: {
              type: "string",
              description:
                "The email of the person who is trying to contact Vedant. This is required.",
            },
          },
          required: ["name", "email"],
        },
      },
    ],
    function_call: "auto",
    temperature: 0.2,
    max_tokens: 650,
  });

  let completionResponse = chatCompletion.choices[0].message;
  // console.log(completionResponse);

  let functionResponse;
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
