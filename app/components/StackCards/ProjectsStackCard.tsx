'use client'

import {memo} from "react";
import StackCard from "@/app/components/StackCard";
import ProjectTile from "@/app/components/StackCards/ProjectTile";

const ProjectsStackCard = memo(() => {
    const projects = [
        {
            name: "Apollo18",
            description: "Introducing Apollo18, my cool Discord Bot adventure! It's not just a bot, but my coding journey from APIs to Databases and beyond. I picked up all the tricks while working on it, and when it started impressing folks, I decided to share the love. Now it's open-source, so anyone can join in and help take Apollo18 to new heights!",
            link: "https://github.com/vedantgrover/Apollo18"
        }, {
            name: "Typical Programming",
            description: "I built my own programming language from scratch using Python, an adventure that not only introduced me to the language but also deepened my understanding of programming languages' inner workings. This journey ignited my passion for coding and expanded my insights into the fascinating world of programming languages.",
            link: "https://github.com/vedantgrover/TypicalProgramming"
        }, {
            name: "BladeCraft",
            description: "Say hello to my Minecraft mod! It's where my coding journey began – my way of spicing up Minecraft and making it a real blast. While I might've taken a break from it, I'm always hungry for new ideas to make it even cooler. It's like my personal sandbox where the possibilities are endless!",
            link: "https://github.com/vedantgrover/BladeCraftForge"
        }, {
            name: "Vedant's Portfolio",
            description: "This is the code for the portfolio you are currently on! I am using TailwindCSS for the styling (with a few custom CSS attributes), NextJS for the framework, and React. The portfolio was programmed in Typescript.",
            link: "https://github.com/vedantgrover/VedantsPortfolio"
        }
    ]

    return (
        <StackCard className="bg-stone-400">
            <div className="grid grid-cols-2 gap-4 p-8">
                {projects.map((p) => <ProjectTile key={p.link} href={p.link}
                                                  title={p.name}>{p.description}</ProjectTile>)}
            </div>
        </StackCard>
    )
})

ProjectsStackCard.displayName = "ProjectsStackCard";

export default ProjectsStackCard