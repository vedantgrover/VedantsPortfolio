'use client'

import {memo} from "react";
import {motion} from "framer-motion";

const marqueeVariants = {
    animate: {
        x: ["0%", "-50%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
}

const MarqueeText = memo(() => {

    return (
        <div className="w-[99vw] min-h-[218px] flex justify-center items-center">
            <motion.div
                className="whitespace-nowrap flex"
                variants={marqueeVariants}
                animate="animate">
                <h1 className="mx-[20px] text-[12rem] font-black flex-shrink-0">VEDANT GROVER</h1>
                <h1 className="mx-[20px] text-[12rem] font-black flex-shrink-0">VEDANT GROVER</h1>
            </motion.div>
            <motion.div
                className="whitespace-nowrap flex"
                variants={marqueeVariants}
                animate="animate">
                <h1 className="mx-[20px] text-[12rem] font-black flex-shrink-0">VEDANT GROVER</h1>
                <h1 className="mx-[20px] text-[12rem] font-black flex-shrink-0">VEDANT GROVER</h1>
            </motion.div>
        </div>
    )
})

MarqueeText.displayName = "MarqueeText"

export default MarqueeText