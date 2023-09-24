import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Date from "./date";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface BlogPreviewProps {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
}

export default function BlogPreview({
  id,
  title,
  date,
  shortDescription,
}: BlogPreviewProps) {
  return (
    <div className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <a href={"/blogs/" + id}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{title}</span>
        </a>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-500 pl-3.5"
        dateTime={date}
      >
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500" />
        </span>
        <Date dateString={date} />
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {shortDescription}
      </p>
      <div
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-cyan-600"
        aria-hidden
      >
        Read Article
        <FontAwesomeIcon icon={faArrowRight} className="text-cyan-600 ml-3" />
      </div>
    </div>
  );
}
