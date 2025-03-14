"use client";

import { memo, useMemo } from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import useActiveSection from "@/lib/useActiveSection";
import CollapsableNavbar from "@/app/components/navbar/CollapsableNavbar";

interface NavLink {
  title: string;
  id: string;
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar = memo(({ links }: NavbarProps) => {
  // Memoize section IDs to prevent unnecessary recalculations
  const sectionIds = useMemo(() => links.map((l) => l.id), [links]);
  
  // Use memoized active section to optimize performance
  const activeSection = useActiveSection(sectionIds);

  // Memoize navbar items to prevent unnecessary re-renders
  const navbarItems = useMemo(() => 
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

  return (
    <>
      <CollapsableNavbar links={links} activeSection={activeSection} />
      <nav 
        className="justify-center items-end backdrop-blur-[10px] fixed w-full h-[75px] z-[1000] hidden md:flex"
        aria-label="Main Navigation"
      >
        <div 
          className="bg-white dark:bg-zinc-700 rounded-3xl flex flex-row shadow-md dark:shadow-zinc-950"
          role="menubar"
        >
          {navbarItems}
        </div>
      </nav>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
