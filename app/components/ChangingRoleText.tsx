"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const ChangingRoleText = memo(() => {
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

  useEffect(() => {
    const id = setInterval(() => {
      let next = index + 1;
      setIndex(next % roles.length);
    }, 3 * 1000);

    return () => clearInterval(id);
  }, [index, roles]);

  return (
    <motion.div
      className="min-h-[30px]"
      key={index}
      initial={{ y: "102%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-102%", transition: { duration: 4, ease: "linear" } }}
      // layout
      // variants={{
      //   enter: {
      //     translateY: 20,
      //     opacity: 0,
      //     height: 0,
      //   },
      //   center: {
      //     zIndex: 1,
      //     translateY: 0,
      //     opacity: 1,
      //     height: "auto",
      //   },
      //   exit: {
      //     zIndex: 0,
      //     translateY: -20,
      //     opacity: 0,
      //     height: 0,
      //   },
      // }}
      // initial="enter"
      // animate="center"
      // exit="exit"
      // transition={{
      //   translateY: { type: "spring", stiffness: 1000, damping: 200 },
      //   opacity: { duration: 0.5 },
      // }}
    >
      <p className="text-xl font-normal text-[#4d4d4d] dark:text-[#b2b2b2] tracking-widest">
        {roles[index]}
      </p>
    </motion.div>
  );
});

ChangingRoleText.displayName = "ChangingRoleText";

export default ChangingRoleText;
