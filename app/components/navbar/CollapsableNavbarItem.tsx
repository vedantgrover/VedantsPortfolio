import { memo, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface CollapsableNavbarItemProps {
  title: string;
  link: string;
  selected: boolean;
  onClick?: () => void;
}

const CollapsableNavbarItem = memo(
  ({ title, link, selected, onClick }: CollapsableNavbarItemProps) => {
    // Memoize variants to prevent unnecessary re-creation
    const itemVariants = useMemo<Variants>(() => ({
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    }), []);

    // Memoize dynamic classes to optimize performance
    const itemClasses = useMemo(() => 
      `mb-[20px] flex items-center w-min p-4 rounded-3xl ${
        selected
          ? "bg-[#333333] dark:bg-white dark:text-black font-bold text-white"
          : "bg-white dark:bg-zinc-800 font-normal text-black dark:text-zinc-100"
      }`, 
      [selected]
    );

    return (
      <motion.li
        variants={itemVariants}
        whileTap={{ scale: 0.95 }}
        className={itemClasses}
        role="menuitem"
        aria-current={selected ? "page" : undefined}
      >
        <Link 
          href={`#${link}`} 
          onClick={onClick}
          className="w-full"
        >
          {title}
        </Link>
      </motion.li>
    );
  }
);

CollapsableNavbarItem.displayName = "CollapsableNavbarItem";

export default CollapsableNavbarItem;
