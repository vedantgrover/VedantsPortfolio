import {memo} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
    selected: boolean;
    title: string;
    link: string;
}

const NavbarItem = memo(({ selected, title, link }: NavbarItemProps) => {
    return (
        <Link href={link} className={`${selected ? "bg-green-900 text-white":"bg-white text-black"} py-[10px] px-[18px] rounded-[96px] text-center flex`}>
            <motion.div whileHover={selected ? {translateY: 0}:{translateY: -5}} className={`${selected ? "font-bold":"font-normal"} text-[14px]`}>
                {title}
            </motion.div>
        </Link>
    )
})

NavbarItem.displayName = "NavbarItem";

export default NavbarItem