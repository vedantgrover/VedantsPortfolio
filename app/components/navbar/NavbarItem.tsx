import {memo} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
    selected: boolean;
    title: string;
    link: string;
}

const NavbarItem = memo(({selected, title, link}: NavbarItemProps) => {
    return (
        <Link href={`#${link}`} className={`relative py-[10px] px-[18px] text-center flex`}>
            {selected &&
                <motion.div layoutId="activeBackground" className="absolute inset-0 bg-green-900 rounded-[96px] z-0"
                            initial={false} transition={{type: "spring", stiffness: 300, damping: 30}}/>}
            <motion.div whileHover={selected ? {translateY: 0} : {translateY: -5}}
                        className={`${selected ? "text-white font-bold" : "text-black font-normal"} relative z-10 text-[14px]`}>
                {title}
            </motion.div>
        </Link>
    )
})

NavbarItem.displayName = "NavbarItem";

export default NavbarItem