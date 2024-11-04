"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadResumeButton = memo(() => {
  return (
    <motion.div
      whileHover={{ translateY: -5 }}
      className="w-[300px] h-[75px] rounded-full border-[6px] border-blue-200 flex flex-row justify-between shadow-md"
    >
      <Link
        href="https://www.dropbox.com/scl/fi/5cf3kdmidjobq3wnvxuw2/VGResume.docx?rlkey=thi3qjbn5sqkwlmbmcnyz86rj&st=2l7m77eb&dl=1"
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
