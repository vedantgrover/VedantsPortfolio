"use client";

import { memo, useRef } from "react";
import AboutMeText from "@/app/components/AboutMeText";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import MobileAboutMeDetail from "@/app/components/MobileAboutMeDetail";

const AboutSection = memo(() => {
  const aboutMeDetails = [
    {
      title: "Personal",
      description:
        "I am a university student from Seattle, Washington, currently studying at the University of Waterloo in Toronto, Ontario. I aspire to become an ML engineer and hope to work in big tech.",
      image: "/me1.jpg",
    },
    {
      title: "FIRST Robotics",
      description:
        "I was a part of FRC Team 2910, where I served as a Software Developer, Software Lead, Team Representative, and Scouting Lead. I created data visualizations that helped us compare robots and make the best selections for the playoffs. Through this system, we achieved a 3rd place ranking internationally.",
      image: "/me_at_robotics.PNG",
    },
    {
      title: "Swim Team",
      description:
        "I joined the swim team when I was 10 years old. Since then, I have gone on to win many events as a captain of the Mill Creek YMCA Swim Team and reached the district level of competition in high school. I also served as the captain of my high school swim team.",
      image: "/me_at_swim.jpeg",
    },
    {
      title: "Coding Journey",
      description:
        "I began coding when I was 13 with a Minecraft Mod. Since then, I have worked on many more projects and hope to leave my mark on this universe.",
      image: "/me_with_vision_pro.jpeg",
    },
  ];

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const screenScrollToDetailSectionCoefficient =
    aboutMeDetails.length / (aboutMeDetails.length - 1);

  const heightTransforms = aboutMeDetails.map((_, index) => {
    if (index == 0) return "100%";

    const start =
      (index - 1) *
      ((1 / aboutMeDetails.length) * screenScrollToDetailSectionCoefficient);
    const end =
      index *
      ((1 / aboutMeDetails.length) * screenScrollToDetailSectionCoefficient);

    console.log(index, start, end);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(scrollYProgress, [start, end], ["0%", "100%"]);
  });

  return (
    <motion.section
      id="about"
      style={{ height: `${aboutMeDetails.length * 100}vh` }}
      className="mt-0 flex"
      ref={targetRef}
    >
      <div className="flex md:hidden">
        <div className="flex flex-col">
          {aboutMeDetails.map((detail, index) => (
            <div key={index}>
              <MobileAboutMeDetail
                title={detail.title}
                description={detail.description}
                image={detail.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="relative overflow-hidden w-1/2 h-full">
          {aboutMeDetails.map((detail, index) => (
            <div key={index}>
              <AboutMeText title={detail.title}>
                {detail.description}
              </AboutMeText>
            </div>
          ))}
        </div>
        <div className="sticky top-0 flex w-1/2 left-1/2 content-center items-center h-screen">
          <div className="w-[31vw] h-[31vw] flex overflow-hidden rounded-[11%] z-[100] relative flex-col">
            {aboutMeDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{ height: heightTransforms[index], zIndex: index }}
              >
                <Image
                  src={detail.image}
                  alt={detail.title}
                  className="object-cover"
                  priority
                  quality={50}
                  fill
                  sizes="100vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
