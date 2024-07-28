'use client'

import {memo, useRef} from "react";
import Image from "next/image";
import {motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";

const ImageOfMe = memo(() => {
    return (
        <motion.div className="h-[300px] w-[300px] overflow-hidden z-[1] rounded-[48px] justify-center shadow-md">
            <Image
                src={"/me.jpg"}
                alt={"Vedant"}
                width={300}
                height={300}
                className="relative -top-14 mx-auto"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
        </motion.div>
    );
})

ImageOfMe.displayName = "ImageOfMe"

export default ImageOfMe