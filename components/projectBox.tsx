import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  logo: string;
  description: string;
  link: string;
}

export default function ProjectBox({
  title,
  logo,
  description,
  link,
}: ProjectProps) {
  const getHostName = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (error) {
      console.log(error);
      return "Invalid URL";
    }
  };

  return (
    <li key={title} className="group relative flex flex-col items-start">
      <div
        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={link} target="_blank">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-600 dark:text-zinc-200">
        <FontAwesomeIcon icon={faLink} className="h-6 w-6 flex-none" />
        <span className="ml-2">{getHostName(link)}</span>
      </p>
    </li>
  );
}
