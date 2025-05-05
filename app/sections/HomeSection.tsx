"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Greeting from "@/app/components/Greeting";
import ScrollButton from "@/app/components/ScrollButton";

const HomeSection: React.FC = memo(() => {
  return (
    <motion.section
      id="home"
      className="flex flex-col justify-center items-center max-h-screen h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Home Section"
    >
      <div>
        <Greeting />
      </div>
      <motion.div 
        className="xs:hidden md:flex absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ScrollButton />
      </motion.div>
    </motion.section>
  );
});

HomeSection.displayName = "HomeSection";

export default HomeSection;
