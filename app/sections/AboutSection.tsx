'use client'

import {memo, useRef} from "react";
import AboutMeText from "@/app/components/AboutMeText";
import Image from "next/image";
import {useScroll, useTransform} from "framer-motion";

const AboutSection = memo(() => {
    const aboutMeDetails: { title: string, description: string, image: string }[] = [
        {
            title: "FIRST Robotics",
            description: "I was a part of FRC Team 2910 as a Software Developer, Software Lead, Team Representative, and Data Analyzer.",
            image: "/me1.jpg"
        }, {
            title: "FIRST Robotics",
            description: "I was a part of FRC Team 2910 as a Software Developer, Software Lead, Team Representative, and Data Analyzer.",
            image: "/me.jpg"
        }
    ]

    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({container: targetRef, offset: ["start start", "end end"]})

    const yTransforms = aboutMeDetails.map((_, index) =>
        useTransform(scrollYProgress, [index / aboutMeDetails.length, (index + 1) / aboutMeDetails.length], ["0%", "-100%"])
    )


    return (
        <section id="about" style={{height: `${aboutMeDetails.length * 100}vh`}} className="mt-0 static flex"
                 ref={targetRef}>
            <div className="relative overflow-hidden w-1/2 h-full">
                <div className="static w-full h-full">
                    {aboutMeDetails.map(detail => (
                        <AboutMeText title={detail.title}>{detail.description}</AboutMeText>
                    ))}
                </div>
            </div>
            <div className="sticky top-0 flex w-1/2 left-1/2 content-center items-center h-screen">
                <div className="w-[31vw] h-[31vw] flex overflow-hidden rounded-[11%] z-[100]">
                    {aboutMeDetails.map((detail, index) => (
                        <Image
                            key={index}
                            src={detail.image}
                            alt={detail.title}
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="object-cover"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
})

export default AboutSection