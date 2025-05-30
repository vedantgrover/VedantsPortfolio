import { memo, useRef, useMemo, useCallback } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { useDimensions } from "@/lib/useDimensions";
import CollapsableNavbarItem from "@/app/components/navbar/CollapsableNavbarItem";
import Toggle from "@/app/components/navbar/Toggle";

interface NavLink {
  title: string;
  id: string;
}

interface CollapsableNavbarProps {
  links: NavLink[];
  activeSection: string | null;
}

const CollapsableNavbar = memo(
  ({ links, activeSection }: CollapsableNavbarProps) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    // Memoize sidebar variants to prevent unnecessary re-creation
    const sidebarVariants = useMemo(() => ({
      open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      }),
      closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
          delay: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    }), []);

    // Memoize navigation variants
    const navigationVariants = useMemo<Variants>(() => ({
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }), []);

    // Memoize navbar items to prevent unnecessary re-renders
    const navbarItems = useMemo(() => 
      links.map((l) => (
        <CollapsableNavbarItem
          key={l.id}
          selected={activeSection === l.id}
          title={l.title}
          link={l.id}
          onClick={toggleOpen}
        />
      )), 
      [links, activeSection, toggleOpen]
    );

    return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="fixed top-0 left-0 z-[1000] h-[75px] items-end justify-between px-8 backdrop-blur-[10px] w-screen md:hidden"
        aria-label="Mobile Navigation"
      >
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-zinc-800 z-[900]"
          variants={sidebarVariants}
          aria-hidden="true"
        />
        <motion.ul
          variants={navigationVariants}
          className="m-0 p-[25px] absolute top-[100px] w-screen z-[925]"
          role="menu"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          {navbarItems}
        </motion.ul>
        <Toggle 
          toggle={toggleOpen} 
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        />
      </motion.nav>
    );
  }
);

CollapsableNavbar.displayName = "CollapsableNavbar";

export default CollapsableNavbar;
