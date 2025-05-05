import { memo } from "react";
import { motion } from "framer-motion";
import DownArrow from "./icons/DownArrow";
import Link from "next/link";

const ScrollButton = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <Link
        href="/#about"
        // className="block h-min w-min dark:border-white/80 border-[#333333] rounded-full border-dashed p-1 border-2"
        aria-label="Scroll to About Section"
      >
        <div className="h-min w-min dark:border-white/80 border-[#333333] rounded-full p-1 border-2 animate-bounce transition-all ease-in-out hover:scale-110">
          <DownArrow />
        </div>
      </Link>
    </motion.div>
  );
});

ScrollButton.displayName = "ScrollButton";

export default ScrollButton;
