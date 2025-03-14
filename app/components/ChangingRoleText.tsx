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

  // Memoize animation variants
  const textVariants = useMemo(() => ({
    initial: { y: "102%" },
    animate: { y: "0%" },
    exit: { 
      y: "-102%", 
      transition: { duration: 0.4, ease: "easeInOut" } 
    }
  }), []);

  return (
    <div className="min-h-[30px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="text-xl font-normal text-[#4d4d4d] dark:text-[#b2b2b2] tracking-widest absolute w-full"
          initial={textVariants.initial}
          animate={textVariants.animate}
          exit={textVariants.exit}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
});

ChangingRoleText.displayName = "ChangingRoleText";

export default ChangingRoleText;
