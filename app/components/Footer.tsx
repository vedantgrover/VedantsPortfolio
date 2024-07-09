import {memo} from "react";
import Link from "next/link";
import Github from "@/app/components/Icons/Github";
import YouTube from "@/app/components/Icons/YouTube";
import Instagram from "@/app/components/Icons/Instagram";
import Linkedin from "@/app/components/Icons/Linkedin";
import Mail from "@/app/components/Icons/Mail";

const Footer = memo(() => {
    return (
        <div className="absolute bottom-0 p-6">
            <div className="flex flex-row space-x-7">
                <Link href={"https://github.com/vedantgrover"}><Github/></Link>
                <Link href={"https://www.youtube.com/c/BladeDurman"}><YouTube/></Link>
                <Link href={"https://instagram.com/vedantgrover06"}><Instagram/></Link>
                <Link href={"https://www.linkedin.com/in/vedantgrover23"}><Linkedin/></Link>
                <Link href={"mailto:vedantvgrover@gmail.com"}><Mail/></Link>
            </div>
        </div>
    )
})

Footer.displayName = "Footer"

export default Footer