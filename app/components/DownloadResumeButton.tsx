"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadResumeButton = memo(() => {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

  if (!resumeUrl) {
    console.error("Resume URL is not defined. Make sure NEXT_PUBLIC_RESUME_URL is set in the .env.local file.");
    return null;
  }

  return (
    <motion.div
      whileHover={{ translateY: -5 }}
      className="w-[300px] h-[75px] rounded-full border-[6px] border-zinc-700/80 dark:border-white/80 flex flex-row justify-between shadow-md"

    >
      <Link
        href={resumeUrl}
        target="_blank"
        className="w-full h-full flex justify-center items-center"
      >
        <p className="font-bold text-xl dark:text-white">Download Resume</p>
      </Link>
    </motion.div>
  );
});

DownloadResumeButton.displayName = "DownloadResumeButton";

export default DownloadResumeButton;
