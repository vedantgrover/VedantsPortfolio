"use client";

import { memo, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadResumeButton = memo(() => {
  const [loading, setLoading] = useState(true);

  const password = useMemo<string>(() => {
    if (process.env.RESUME_URL) {
      setLoading(false);
      return process.env.RESUME_URL;
    } else {
      setLoading(true)
    }

    return "";
  }, [process.env.RESUME_URL]);

  return loading ? (
    <div />
  ) : (
    <motion.div
      whileHover={{ translateY: -5 }}
      className="w-[300px] h-[75px] rounded-full border-[6px] border-zinc-700/80 dark:border-white/80 flex flex-row justify-between shadow-md"
    >
      <Link
        href={password}
        target="_blank"
        className="w-full h-full flex justify-center items-center"
      >
        <p className="font-bold text-xl dark:text-white">Download Resume</p>
      </Link>
    </motion.div>
  );
});

DownloadResumeButton.displayName = "DownloadResumeButton"

export default DownloadResumeButton;
