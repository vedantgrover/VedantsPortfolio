'use client'

import {memo, useRef} from "react";
import Image from "next/image";
import {motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ImageOfMe = memo(() => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div ref={ref} style={{transform, transformStyle: "preserve-3d"}} onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="h-[300px] w-[300px] overflow-hidden z-[1] rounded-[48px] justify-center shadow-md border-8 border-blue-200">
            <Image src={"/me.jpg"} alt={"Vedant"} width={300} height={300} className="relative -top-14 mx-auto"/>
        </motion.div>
    )
})

ImageOfMe.displayName = "ImageOfMe"

export default ImageOfMe