"use client";

import React, { memo, useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChangingRoleText: React.FC = memo(() => {
  const roles = useMemo(
    () => [
      "Full-Stack Developer",
      "Leader",
      "Efficient Communicator",
      "Teammate",
      "Colleague",
      "Student",
      "Innovator",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Use useCallback to memoize the interval function
  const cycleRoles = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }, [roles]);

  useEffect(() => {
    const intervalId = setInterval(cycleRoles, 3000);
    return () => clearInterval(intervalId);
  }, [cycleRoles]);

  // Variants for the container with stagger children
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  // Variants for each character
  const charVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-[30px] overflow-hidden relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          className="text-xl font-normal text-[#4d4d4d] dark:text-[#b2b2b2] tracking-widest flex flex-wrap"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {roles[index].split("").map((char, i) => (
            <motion.span key={i} variants={charVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

ChangingRoleText.displayName = "ChangingRoleText";

export default ChangingRoleText;
