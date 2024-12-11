"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DownloadResumeButton = memo(() => {
  return (
    <motion.div
      whileHover={{ translateY: -5 }}
      className="w-[300px] h-[75px] rounded-full border-[6px] border-zinc-700/80 dark:border-white/80 flex flex-row justify-between shadow-md"

    >
      <Link
        href="https://www.dropbox.com/scl/fi/0kih6zrvbmpkcras58wsh/VGResume.docx.pdf?rlkey=1n4gm9odl2shu91doqid7t9ht&st=ic4h1zu1&dl=1"
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
