import { memo, ReactNode } from "react";
import { motion } from "framer-motion";

interface AboutMeTextProps {
  title: string;
  children: ReactNode;
}

const AboutMeText = memo(({ title, children }: AboutMeTextProps) => {
  return (
    <motion.div 
      className="mt-[13px] static w-[50%] h-[98vh] text-center flex flex-col ml-auto mr-[25.2px] justify-center items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut" 
      }}
    >
      <motion.h4 
        className="text-3xl font-[500] tracking-[.4px] text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h4>
      <motion.p 
        className="text-black dark:text-white text-xl pb-[10px] tracking-[0.38px] pt-[0.3rem] max-w-[80%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {children}
      </motion.p>
    </motion.div>
  );
});

AboutMeText.displayName = "AboutMeText";

export default AboutMeText;