"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ValentinePage() {
  const [hoveringNo, setHoveringNo] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [bearPositions, setBearPositions] = useState(generateBearPositions(8));
  const [imageBearPositions, setImageBearPositions] = useState(generateBearPositions(4));

  const phrases = [
    "Hey Rudraa...",
    "So you're single for Valentine's Day? 👀",
    "Wait so am I...😏",
    "I can't bear the thought...🐻",
    "of not spending Valentine's Day...😩",
    "with you...🙃",
    "Wanna be my Valentine? 💖",
  ];

  const bearImages = [
    "/bear1.jpeg",
    "/bear2.png",
    "/bear3.png",
    "/bear4.png",
    "/bear5.png",
  ];

  function generateBearPositions(count: number) {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const horizontalRadius = 250;
      const verticalRadius = 200;
      return {
        x: Math.cos(angle) * horizontalRadius + Math.random() * 30,
        y: Math.sin(angle) * verticalRadius + Math.random() * 30,
        rotation: Math.random() * 30 - 15,
      };
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBearPositions(generateBearPositions(8));
      setImageBearPositions(generateBearPositions(5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only set up interval if we haven't reached the last phrase
    if (currentPhraseIndex < phrases.length - 1) {
      const interval = setInterval(() => {
        setCurrentPhraseIndex(prev => {
          // Only increment if we haven't reached the last phrase
          if (prev < phrases.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentPhraseIndex]);

  const handleMouseEnter = () => {
    setHoveringNo(true);
  };

  const handleMouseLeave = () => {
    setHoveringNo(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden">
      {/* Container for bears */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {bearPositions.map((position, index) => (
          <motion.div
            key={`emoji-${index}`}
            className="absolute"
            initial={{ x: position.x, y: position.y }}
            animate={{ x: position.x, y: position.y }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <motion.span
              className="text-6xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              🧸
            </motion.span>
          </motion.div>
        ))}

        {imageBearPositions.map((position, index) => (
          <motion.div
            key={`image-${index}`}
            className="absolute"
            initial={{ x: position.x, y: position.y, rotate: position.rotation }}
            animate={{ x: position.x, y: position.y, rotate: position.rotation }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <Image
                src={bearImages[index % bearImages.length]}
                alt="Bear"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Valentine's Message with rolling effect */}
        <div className="h-[48px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhraseIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl font-bold text-red-500 mb-8 text-center"
            >
              {phrases[currentPhraseIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center mt-8">
          <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"} className={`${hoveringNo ? "scale-150" : "scale-100"} hover:scale-125 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out`}>
            Yes
          </a>
          <button
            className={`px-4 py-2 bg-red-500 text-white rounded-lg transition-opacity hover:bg-red-600 ${
              hoveringNo ? "opacity-0" : "opacity-100"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
