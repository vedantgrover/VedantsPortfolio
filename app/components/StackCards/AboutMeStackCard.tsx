import {memo} from "react";
import StackCard from "@/app/components/StackCard";

const AboutMeStackCard = memo(() => {
    return (
        <StackCard className="bg-white">
            <div className="px-16 py-24 2xl:w-[75%]">
                <h1 className="font-bold text-4xl">About Me</h1>
                <p className="text-2xl mt-8">I am passionate about creating something meaningful to the world. Through
                    my many years of experience, I have gathered knowledge on both frontend and backend technologies. I
                    am constantly working on projects to practice both skills.</p>
                <div className="mt-16">
                    <h1 className="font-bold">Technical Skills</h1>
                    <p className="mt-2">I have experience working in both frontend and backend. For my frontend work, I
                        mainly work with
                        React and NextJS. I have also used React Native to build apps. When working on backend development, I enjoy
                        using Java and the Spring Framework but I am also open to use NodeJS and Python. I hope to learn
                        Ruby, C, and C++ next as those languages expose me to a new part of software development.</p>
                </div>
                <div className="mt-16">
                    <h1 className="font-bold">Personal Life</h1>
                    <p className="mt-2">I was born in India but moved to Seattle many years ago. I enjoy swimming, working out, riding bikes, fixing bikes (for when I eventually break them), and rock climbing.</p>
                </div>
            </div>
        </StackCard>
    )
})

AboutMeStackCard.displayName = "AboutMeStackCard"

export default AboutMeStackCard