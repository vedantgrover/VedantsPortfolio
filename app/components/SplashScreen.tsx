"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useImageLoading from "@/lib/useImageLoading";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Let's Build Something Amazing.";
  const imagesLoaded = useImageLoading();

  // Handle typing animation
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Handle fade out after both typing and images are complete
  useEffect(() => {
    if (typingComplete && imagesLoaded) {
      // Add a small delay before fading out
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [typingComplete, imagesLoaded]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-800"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-white">
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
          {typingComplete && !imagesLoaded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"
            >
              Loading assets...
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
