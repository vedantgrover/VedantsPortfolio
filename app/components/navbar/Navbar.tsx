'use client'

import {usePathname} from "next/navigation";
import {memo} from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";
import useSectionObserver from "@/lib/useSectionObserver";

interface NavbarProps {
    links: { title: string, id: string }[]
}

const Navbar = memo(({links}: NavbarProps) => {
    return (
        <nav className="flex justify-center items-end backdrop-blur-[10px] fixed w-full h-[75px]">
            <div className="bg-white rounded-3xl flex flex-row shadow-md">
                {links.map((l) => <NavbarItem key={l.title} selected={useSectionObserver(l.id)} title={l.title}
                                              link={l.id}/>)}
            </div>
        </nav>
    )
})

Navbar.displayName = "Navbar"

export default Navbar

