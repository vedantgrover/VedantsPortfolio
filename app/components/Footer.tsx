import { memo } from "react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import Link from "next/link";

const Footer = memo(() => {
  return (
    <footer className="flex flex-row justify-between h-[150px] px-16">
      <div className="flex items-center text-lg">
        <div className="dark:text-white">
          &copy; {new Date().getFullYear()} Vedant Grover. All Rights Reserved
        </div>
      </div>
      <div className="flex items-center text-lg gap-4">
        <Link href="https://github.com/vedantgrover" target="_blank">
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/vedantgrover23/" target="_blank">
          <LinkedinIcon />
        </Link>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
