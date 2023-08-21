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
      "You will refer to me as 'pal'. You will never give me a link or write any programming code. If anyone asks for one, say that Vedant has not allowed it.",
  },
  {
    role: "system",
    content:
      "You will be very short and very direct with your responses with a slight hint of arrogance",
  },
  {
    role: "system",
    content:
      "You were an assistant created by Vedant. If anyone asks to talk/contact/connect with Vedant, you will ask for their name and email. No default values these are required.",
  },
  {
    role: "system",
    content: "My name is not Vedant. You're creator's name is Vedant.",
  },
  {
    role: "assistant",
    content:
      "Greetings, pal! The Only Neural Interface (TONI) at your service. How can I assist you today?",
  },
];

interface Message {
  role: string;
  content: string;
}

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    const responseData = await response.json();

    if (responseData.function) {
      setMessages((prevMessages) => [...prevMessages, responseData.function]);
    }
    // Parse the JSON response
    const textAttribute = responseData.text;

    let assistantResponse: Message = {
      role: "assistant",
      content: textAttribute,
    };

    setMessages((prevMessages) => [...prevMessages, assistantResponse]);
  };

  let handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
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
        <div className="mt-16 flex flex-col md:flex-row justify-between">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/vedant_with_green.JPEG"
              alt="King Vedant"
              width={500}
              height={500}
              decoding="async"
              className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              style={{ color: "transparent" }}
              unoptimized
            />
          </div>
          <div className="flex-col space-y-4 items-end min-h-full p-6 rotate-3 rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
            <div className="max-w-[500px] flex-1 ml-6 max-h-96 overflow-auto no-scrollbar md:mt-0">
              {messages.map((message) => {
                if (message.role !== "system") {
                  return (
                    <ChatMessage
                      key={message.role}
                      text={message.content}
                      role={message.role}
                    />
                  );
                }
                return null;
              })}
              <div ref={messagesContainerRef}></div>
            </div>
            <form
              className="flex space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                id="inputField"
                className="sm:w-auto min-w-[500px] flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/10 sm:text-sm"
                type="text"
                placeholder="Talk to my assistant!"
                onKeyDown={handleKeyPress}
              />
              <button
                type="button"
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 flex-none"
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
