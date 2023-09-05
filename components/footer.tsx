import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <div className="flex items-center justify-between text-gray-500 pt-24 pb-4">
      <div className="space-x-9 text-xl">
        <Link
          href="https://github.com/vedantgrover"
          className=" hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="https://www.youtube.com/c/BladeDurman"
          className=" hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link
          href="https://instagram.com/vedantgrover06"
          className=" hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vedantgrover23/"
          className=" hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="https://www.threads.net/vedantgrover06"
          className=" hover:text-black dark:hover:text-white"
          target="_blank"
        >
          <FontAwesomeIcon icon={faThreads} />
        </Link>
        <button
          onClick={scrollToTop}
          className="hover:text-black dark:hover:text-white"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>

      <div className="text-lg">
        &copy; {new Date().getFullYear()} Vedant Grover. All Rights Reserved.
      </div>
    </div>
  );
}
