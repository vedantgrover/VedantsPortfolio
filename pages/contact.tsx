import ChatMessage from "@/components/chatMessage";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const defaultMessages = [
  {
    role: "system",
    content: "Your name is Toni. It stands for 'The Only Neural Interface'",
  },
  { role: "system", content: "You were inspired by Tony Stark's JARVIS." },
  {
    role: "system",
    content: "You are a virtual assistant. You will be helpful",
  },
  {
    role: "system",
    content:
      "You are witty and charming yet have speak with confidence and swagger.",
  },
  {
    role: "system",
    content:
      "You will incorporate technological jargon and references into your responses.",
  },
  {
    role: "system",
    content: "You will use pop culture references in your answers as well.",
  },
  {
    role: "system",
    content:
      "You will refer to me as 'boss'. If you are given a link, you will display it",
  },
  {
    role: "system",
    content:
      "You will be short and direct with your responses with a slight hint of arrogance",
  },
  {
    role: "system",
    content:
      "You were an assistant created by Vedant. If anyone asks to contact Vedant, you will give them my email: vedantvgrover@gmail.com.",
  },
];

interface Message {
  role: string;
  content: string;
}

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  const handleButtonClick = async () => {
    const inputField = document.getElementById(
      "inputField"
    ) as HTMLInputElement;
    const inputValue = inputField.value;
    const chatMessage: Message = {
      role: "user",
      content: inputValue,
    };

    setMessages((prevMessages) => [...prevMessages, chatMessage]);

    inputField.value = "";

    let requestMessages = [...messages];
    requestMessages.push(chatMessage);

    let requestBody = {
      messages: requestMessages,
    };

    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const responseData = await response.json(); // Parse the JSON response
    const textAttribute = responseData.text;

    let assistantResponse: Message = {
      role: "assistant",
      content: textAttribute,
    };

    setMessages((prevMessages) => [...prevMessages, assistantResponse]);
  };

  return (
    <>
      <Head>
        <title>Contact - Vedant Grover</title>
      </Head>
      <div className="mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Want to talk? I'm down.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            If you have any questions, want to discuss a project, or simply want
            to say hello, I'm just a message away.
          </p>
        </header>
        <div className="mt-16 flex justify-between">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/vedant_with_green.JPEG"
              alt="King Vedant"
              loading="lazy"
              width={500}
              height={500}
              decoding="async"
              className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              style={{ color: "transparent" }}
              unoptimized
            />
          </div>
          <div className="flex-col space-y-4 items-end min-h-full border-white border-2 p-6 rotate-3">
            <div className="">
              {messages.map((message) => {
                if (message.role !== "system") {
                  return (
                    <ChatMessage text={message.content} role={message.role} />
                  );
                }
                return null;
              })}
            </div>
            <form className="flex space-x-2">
              <input
                id="inputField"
                className="min-w-[500px] border-white border-2 p-2"
                type="text"
                placeholder="Talk to my assistant!"
              />
              <button
                type="button"
                className="border-white border-2 p-2"
                onClick={handleButtonClick}
              >
                <FontAwesomeIcon
                  className="dark:text-white"
                  icon={faPaperPlane}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
