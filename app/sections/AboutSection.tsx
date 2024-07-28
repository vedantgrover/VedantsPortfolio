'use client'

import {memo, useRef} from "react";
import AboutMeText from "@/app/components/AboutMeText";
import Image from "next/image";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

const AboutSection = memo(() => {
    const aboutMeDetails = [
        {
            title: "FIRST Robotics",
            description: "I was a part of FRC Team 2910 as a Software Developer, Software Lead, Team Representative, and Data Analyzer.",
            image: "/me1.jpg"
        },
        {
            title: "FIRST Robotics",
            description: "I was a part of FRC Team 2910 as a Software Developer, Software Lead, Team Representative, and Data Analyzer.",
            image: "/me.jpg"
        }
    ];

    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({target: targetRef, offset: ["start start", "end end"]});

    // Transformations for stacking effect
    const yTransforms = aboutMeDetails.map((_, index) =>
        useTransform(scrollYProgress, [0, 1], [`${index * 100}%`, `${(index - aboutMeDetails.length + 1) * 100}%`])
    );

    useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest))


    return (
        <motion.section
            id="about"
            style={{height: `${aboutMeDetails.length * 100}vh`}}
            className="mt-0 flex"
            ref={targetRef}
        >
            <div className="relative overflow-hidden w-1/2 h-full">
                <div className="static w-full h-full">
                    {aboutMeDetails.map((detail, index) => (
                        <div key={index}>
                            <AboutMeText title={detail.title}>
                                {detail.description}
                            </AboutMeText>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sticky top-0 flex w-1/2 left-1/2 content-center items-center h-screen">
                <div className="w-[31vw] h-[31vw] flex overflow-hidden rounded-[11%] z-[100] relative flex-col">
                    {aboutMeDetails.map((detail, index) => (
                        <motion.div key={index} className="absolute top-0 left-0 w-full h-full"
                                    style={{y: yTransforms[index], zIndex: index}}>
                            <Image
                                src={detail.image}
                                alt={detail.title}
                                layout="fill"
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
});

export default AboutSection;
