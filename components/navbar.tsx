import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import useColorMode from "@/hooks/useColorMode";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navigationTabs = [
    ["Home", "/"],
    ["Projects", "/projects"],
  ];

  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <div className="flex items-center justify-between">
      <div>
        {isHomePage ? null : (
          <Link href="/">
            <Image
              src="/images/vedant.png"
              height={35}
              width={35}
              alt="Logo"
              unoptimized
              className="rounded-full"
            />
          </Link>
        )}
      </div>
      <div className="bg-whiteAlpha-200 dark:bg-whiteAlpha-500 py-2 px-5 rounded-full">
        <div className="flex space-x-3 text-center">
          {navigationTabs.map(([title, url]) => (
            <Link
              key={title}
              className={`text-xs ${
                router.pathname === url
                  ? "underline underline-offset-2 text-cyan-600"
                  : "text-black dark:text-white"
              } hover:text-cyan-600 dark:hover:text-cyan-600`}
              href={url}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="bg-whiteAlpha-200 dark:bg-whiteAlpha-500 py-2 px-5 rounded-full hover:cursor-pointer hover:bg-yellow-200 dark:hover:bg-purple-500"
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        style={{ userSelect: "none" }}
      >
        <div>
          <FontAwesomeIcon
            icon={colorMode === "dark" ? faMoon : faSun}
            className="text-black dark:text-white"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
