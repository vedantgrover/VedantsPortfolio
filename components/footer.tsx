import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-between text-gray-500 pt-24 pb-4">
      <div className="space-x-7 text-md">
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
          href="https://www.linkedin.com/in/vedant-grover-523825246/"
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
      </div>

      <div className="text-sm">
        &copy; {new Date().getFullYear()} Vedant Grover. All Rights Reserved.
      </div>
    </div>
  );
}
