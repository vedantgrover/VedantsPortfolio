'use client'

import {usePathname} from "next/navigation";
import {memo} from "react";
import NavbarItem from "@/app/components/navbar/NavbarItem";

interface NavbarProps {
    links: { title: string, link: string }[]
}

const Navbar = memo(({links}: NavbarProps) => {
    const pathName = usePathname();

    return (
        <nav className="flex justify-center items-end backdrop-blur-[10px] fixed w-full h-[75px]">
            <div className="bg-white rounded-3xl flex flex-row shadow-md">
                {/*{links.map((l) => <NavbarItem key={l.title} selected={pathName == l.link} title={l.title} link={l.link} />)}*/}
                <NavbarItem selected={true} title={"Home"} link={"/"} />
            </div>
        </nav>
    )
})

Navbar.displayName = "Navbar"

export default Navbar

