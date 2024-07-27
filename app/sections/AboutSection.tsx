import {memo} from "react";
import AboutMeText from "@/app/components/AboutMeText";

const AboutSection = memo(() => {
    const aboutMeDetails: { title: string, description: string, image: string }[] = [
        {
            title: "FIRST Robotics",
            description: "I was a part of FRC Team 2910 as a Software Developer, Software Lead, Team Representative, and Data Analyzer.",
            image: ""
        }
    ]

    return (
        <section id="about" style={{ height: `${aboutMeDetails.length * 100}vh`}} className="mt-0 static flex">
            <div className="relative overflow-hidden w-1/2 h-full">
                <div className="static w-full h-full">
                    {aboutMeDetails.map(detail => (
                        <AboutMeText title={detail.title}>{detail.description}</AboutMeText>
                    ))}
                </div>
            </div>
            <div className="float-none absolute overflow-visible box-border flex w-1/2 left-1/2 content-center items-center h-screen"></div>
        </section>
    )
})

export default AboutSection