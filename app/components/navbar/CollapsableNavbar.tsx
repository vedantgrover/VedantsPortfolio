import {memo, useRef} from "react";
import {motion, useCycle} from "framer-motion";
import {useDimensions} from "@/lib/useDimensions";
import {Toggle} from "@/app/components/navbar/Toggle";

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

const CollapsableNavbar = memo(() => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <motion.nav
        initial={false}
        animate={isOpen ? "open":"closed"}
        custom={height}
        ref={containerRef} className="flex md:hidden">
            <motion.div className="absolute top-0 left-0 bottom-0 w-screen bg-white z-[1000]" variants={sidebar}></motion.div>
        {/*    Navigation Goes Here */}
            <Toggle toggle={() => toggleOpen()} />
        </motion.nav>
    )
})

CollapsableNavbar.displayName = "CollapsableNavbar"

export default CollapsableNavbar