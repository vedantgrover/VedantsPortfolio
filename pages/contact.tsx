import ChatMessage from "@/components/chatMessage";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
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
      "You will refer to me as 'pal'. My name is not 'pal' unless I explicitly tell you what my name is. You will never give me a link or write any programming code. If anyone asks for one, say that Vedant has not allowed it.",
  },
  {
    role: "system",
    content:
      "You will be very short and very direct with your responses with a slight hint of arrogance. Your responses will be a max of 650 words.",
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
  const [isProcessing, setIsProcessing] = useState(false);

  const placeholder = isProcessing
    ? "Toni is responding..."
    : "Talk to my assistant!";

  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleButtonClick = async () => {
    setIsProcessing(true);
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

    const response = await fetch("https://vedantgrover.com/api/chat", {
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
    setIsProcessing(false);
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
        <div className="mt-16 flex flex-col md:flex-row justify-between space-y-4">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/vedant_with_green.JPEG"
              alt="King Vedant"
              width={500}
              height={500}
              decoding="async"
              className="aspect-square rotate-0 md:-rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              style={{ color: "transparent" }}
              unoptimized
            />
          </div>
          <div className="flex-col space-y-4 items-end min-h-full p-2 md:p-8 rotate-0 rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
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
                className={`flex-auto appearance-none rounded-md border border-zinc-900/10 ${
                  isProcessing
                    ? "bg-zinc-200 dark:bg-zinc-700/50"
                    : "bg-white dark:bg-zinc-700/[0.15]"
                } px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 dark:border-zinc-700 dark:text-zinc-200 dark:placeholder:text-zinc-400 dark:focus:border-cyan-600 dark:focus:ring-cyan-400/10 sm:text-sm`}
                type="text"
                placeholder={placeholder}
                onKeyDown={handleKeyPress}
                disabled={isProcessing}
              />
              <button
                type="button"
                className={`inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none ${
                  isProcessing
                    ? "bg-zinc-200 cursor-not-allowed"
                    : "bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800"
                } font-semibold text-zinc-100 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 flex-none`}
                onClick={handleButtonClick}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 animate-spin text-gray-200 fill-black dark:text-gray-600 dark:fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <FontAwesomeIcon
                    className="dark:text-white"
                    icon={faPaperPlane}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
