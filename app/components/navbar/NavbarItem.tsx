import {memo} from "react";
import Link from "next/link";

interface NavbarItemProps {
    selected: boolean;
    title: string;
    link: string;
}

const NavbarItem = memo(({ selected, title, link }: NavbarItemProps) => {
    return (
        <Link href={link} className={`${selected ? "bg-green-900 text-white":"bg-white text-black"} py-[10px] px-[18px] rounded-[96px] text-center flex`}>
            <div className={`${selected ? "font-bold":"font-normal"} text-[14px]`}>
                {title}
            </div>
        </Link>
    )
})

NavbarItem.displayName = "NavbarItem";

export default NavbarItem