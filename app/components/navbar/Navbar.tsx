'use client'

import {memo} from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import sectionObserver from "@/lib/sectionObserver";

interface NavbarProps {
    links: { title: string, id: string }[]
}

const Navbar = memo(({links}: NavbarProps) => {
    const isVisible = (sectionId: string) => {
        return sectionObserver(sectionId)
    }

    return (
        <nav className="flex justify-center items-end backdrop-blur-[10px] fixed w-full h-[75px]">
            <div className="bg-white rounded-3xl flex flex-row shadow-md">
                {links.map((l) => <NavbarItem key={l.title} selected={isVisible} title={l.title}
                                              link={l.id}/>)}
            </div>
        </nav>
    )
})

Navbar.displayName = "Navbar"

export default Navbar

