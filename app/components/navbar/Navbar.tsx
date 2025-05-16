"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import useActiveSection from "@/lib/useActiveSection";
import CollapsableNavbar from "@/app/components/navbar/CollapsableNavbar";
import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

interface NavLink {
  title: string;
  id: string;
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar = memo(({ links }: NavbarProps) => {
  const socialsRef = useRef<HTMLDivElement>(null);
  const [socialsWidth, setSocialsWidth] = useState(0);

  const sectionIds = useMemo(() => links.map((l) => l.id), [links]);

  const activeSection = useActiveSection(sectionIds);

  const navbarItems = useMemo(
    () =>
      links.map((l) => (
        <NavbarItem
          key={l.id}
          selected={activeSection === l.id}
          title={l.title}
          link={l.id}
        />
      )),
    [links, activeSection]
  );

  useEffect(() => {
    const updateWidth = () => {
      if (socialsRef.current) {
        setSocialsWidth(socialsRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
  }, [])

  return (
    <>
      <CollapsableNavbar links={links} activeSection={activeSection} />
      <nav
        className="fixed top-0 left-0 w-full z-[1000] h-[75px] items-end justify-between px-8 backdrop-blur-[10px] hidden md:flex"
        aria-label="Main Navigation"
      >
        <div className="flex flex-row gap-8" ref={socialsRef}>
          <Link href="https://github.com/vedantgrover" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vedantgrover23/"
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </div>
        <div
          className="flex flex-row bg-white dark:bg-zinc-700 rounded-3xl shadow-md dark:shadow-zinc-950 mx-auto"
          role="menubar"
        >
          {navbarItems}
        </div>
        <div style={{ width: socialsWidth }} aria-hidden />
      </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
