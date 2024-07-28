'use client'

import {memo, useState} from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import useSectionObserver from "@/lib/useSectionObserver";
import CollapsableNavbar from "@/app/components/navbar/CollapsableNavbar";

interface NavbarProps {
    links: { title: string, id: string }[]
}

const Navbar = memo(({links}: NavbarProps) => {
    const sectionIds = links.map(l => l.id);
    const activeSection = useSectionObserver(sectionIds)

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        open: {opacity: 1, x: 0},
        closed: {opacity: 1, x: "-100%"},
    }

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

