import {memo} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
    key?: any;
    selected: (s: string)=> boolean;
    title: string;
    link: string;
}

const NavbarItem = memo(({ selected, title, link, key }: NavbarItemProps) => {
    const isVisible = selected(link)

    return (
        <Link key={key} href={`#${link}`} className={`${isVisible ? "bg-green-900 text-white":"bg-white text-black"} py-[10px] px-[18px] rounded-[96px] text-center flex`}>
            <motion.div whileHover={isVisible ? {translateY: 0}:{translateY: -5}} className={`${isVisible ? "font-bold":"font-normal"} text-[14px]`}>
                {title}
            </motion.div>
        </Link>
    )
})

NavbarItem.displayName = "NavbarItem";

export default NavbarItem