'use client'

import {memo, useState} from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import useSectionObserver from "@/lib/useSectionObserver";
import CollapsableNavbar from "@/app/components/navbar/CollapsableNavbar";
import useActiveSection from "@/lib/useActiveSection";

interface NavbarProps {
    links: { title: string, id: string }[]
}

const Navbar = memo(({links}: NavbarProps) => {
    const sectionIds = links.map(l => l.id);
    const activeSection = useSectionObserver(sectionIds)
    const activeSection = useActiveSection(sectionIds)

    return (
        <>
            <CollapsableNavbar links={links} activeSection={activeSection}/>
            <nav
                className="justify-center items-end backdrop-blur-[10px] fixed w-full h-[75px] z-[1000] hidden md:flex">
                <div className="bg-white rounded-3xl flex flex-row shadow-md">
                    {links.map((l, index) => (
                        <div key={index}>
                            <NavbarItem selected={activeSection === l.id} title={l.title}
                                        link={l.id}/>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
})

Navbar.displayName = "Navbar"

export default Navbar

