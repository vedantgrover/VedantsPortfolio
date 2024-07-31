import {memo, useRef} from "react";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "@/lib/useDimensions";
import CollapsableNavbarItem from "@/app/components/navbar/CollapsableNavbarItem";
import Toggle from "@/app/components/navbar/Toggle";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const navigationVariants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
}

interface CollapsableNavbarProps {
    links: { title: string, id: string }[],
    activeSection: string | null
}

const CollapsableNavbar = memo(({links, activeSection}: CollapsableNavbarProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null)
    const {height} = useDimensions(containerRef)

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef} className="flex w-screen md:hidden">
            <motion.div className="absolute top-0 left-0 bottom-0 w-screen bg-white z-[900]"
                        variants={sidebar}/>
            <motion.ul variants={navigationVariants} className="m-0 p-[25px] absolute top-[100px] w-screen z-[925]">
                {links.map((l, i) => (
                    <div key={i}>
                        <CollapsableNavbarItem selected={activeSection === l.id} title={l.title} link={l.id}/>
                    </div>
                ))}
            </motion.ul>
            <Toggle toggle={() => toggleOpen()}/>
        </motion.nav>
    )
})

CollapsableNavbar.displayName = "CollapsableNavbar"

export default CollapsableNavbar