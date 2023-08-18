import ImageChainItem from "@/components/image-chain-item";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://vedantgrover.com/api/email?email=${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    router.push("/thank-you");
  };

  return (
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
      <div className="mt-16 flex space-x-24">
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
        <div className="flex justify-center items-center min-h-full">
          <form
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
            onSubmit={handleSubmit}
          >
            <h2 className=" flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Contact me
            </h2>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              Put in your information here so that I know who wants to contact
              me and we can connect.
            </p>
            <div className="my-6 flex flex-col space-y-6">
              <input
                type="email"
                placeholder="Email Address"
                aria-aria-label="Email Address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-600 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-cyan-600 dark:focus:ring-cyan-400 dark:focus:ring-cyan-400/10 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                type="submit"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>Send</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
