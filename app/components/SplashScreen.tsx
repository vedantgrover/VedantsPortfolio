"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Let's Build Something Amazing.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait for a moment after typing completes before fading out
        setTimeout(() => setIsVisible(false), 1000);
      }
    }, 100); // Adjust typing speed here (milliseconds per character)

    return () => clearInterval(typingInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash-screen"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-800"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <h1 className="text-center text-4xl font-bold text-zinc-800 dark:text-white">
              {text}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-block w-[2px] h-8 bg-zinc-800 dark:bg-white ml-1"
              />
            </h1>
          </div>
          <motion.div
            className="h-1 w-24 bg-zinc-800 dark:bg-white mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
