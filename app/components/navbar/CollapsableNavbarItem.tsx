import {memo} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

interface CollapsableNavbarItemProps {
    title: string,
    link: string,
    key: any,
    selected: boolean
}

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const CollapsableNavbarItem = memo(({title, link, key, selected}: CollapsableNavbarItemProps) => {
    return (
        <motion.li variants={variants} whileTap={{scale: 0.95}} key={key} className={`mb-[20px] flex items-center w-min p-4 rounded-3xl ${selected ? "bg-green-900 font-bold text-white":"bg-white font-normal text-black"}`}>
            <Link href={`#${link}`}>{title}</Link>
        </motion.li>
    )
})

CollapsableNavbarItem.displayName = "CollapsableNavbarItem"

export default CollapsableNavbarItem