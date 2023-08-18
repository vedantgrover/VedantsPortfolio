import ProjectBox from "@/components/projectBox";
import Head from "next/head";

export default function Projects() {
  const projects = [
    {
      projectName: "Apollo18",
      projectLogo: "/images/projects/apollo18pfp.png",
      description:
        "Introducing Apollo18, my cool Discord Bot adventure! It&apos;s not just a bot, but my coding journey from APIs to Databases and beyond. I picked up all the tricks while working on it, and when it started impressing folks, I decided to share the love. Now it&apos;s open-source, so anyone can join in and help take Apollo18 to new heights!",
      link: "https://github.com/vedantgrover/Apollo18",
    },
    {
      projectName: "Typical Programming",
      projectLogo: "/images/projects/typicalLogo.jpeg",
      description:
        "I built my own programming language from scratch using Python, an adventure that not only introduced me to the language but also deepened my understanding of programming languages&apos; inner workings. This journey ignited my passion for coding and expanded my insights into the fascinating world of programming languages.",
      link: "https://github.com/vedantgrover/TypicalProgramming",
    },
    {
      projectName: "BladeCraft",
      projectLogo: "/images/projects/bladeCraft.png",
      description:
        "Say hello to my Minecraft mod! It&apos;s where my coding journey began – my way of spicing up Minecraft and making it a real blast. While I might&apos;ve taken a break from it, I&apos;m always hungry for new ideas to make it even cooler. It&apos;s like my personal sandbox where the possibilities are endless!",
      link: "https://github.com/vedantgrover/BladeCraftForge",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact - Vedant Grover</title>
      </Head>
      <div className="my-16 sm:my-32 mx-auto max-w-2xl lg:max-w-5xl">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Innovations I&apos;ve made to try and leave my mark on this
            universe.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Code is my canvas, where I paint imaginative solutions and bring
            ideas to life. My mission? To use my craft to make a positive dent
            in the universe, one pixel at a time.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => {
              return (
                <ProjectBox
                  key={project.projectName}
                  title={project.projectName}
                  logo={project.projectLogo}
                  description={project.description}
                  link={project.link}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
