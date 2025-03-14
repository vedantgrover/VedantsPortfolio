import { memo, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
  selected: boolean;
  title: string;
  link: string;
}

const NavbarItem = memo(({ selected, title, link }: NavbarItemProps) => {
  // Memoize variants to prevent unnecessary re-creation
  const itemVariants = useMemo<Variants>(() => ({
    initial: { y: 0 },
    hovered: { y: selected ? 0 : -5 },
  }), [selected]);

  // Memoize text classes to optimize performance
  const textClasses = useMemo(() => 
    `relative z-10 text-[14px] ${
      selected
        ? "text-white dark:text-black font-bold"
        : "text-black dark:text-zinc-100 font-normal"
    }`, 
    [selected]
  );

  return (
    <Link
      href={`#${link}`}
      className="relative py-[10px] px-[18px] text-center flex"
      aria-current={selected ? "page" : undefined}
    >
      <motion.div 
        initial="initial" 
        whileHover="hovered"
        role="menuitem"
      >
        {selected && (
          <motion.div
            layoutId="activeBackground"
            className="absolute inset-0 bg-[#333333] dark:bg-white rounded-[96px] z-0"
            initial={false}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            aria-hidden="true"
          />
        )}
        <motion.div
          variants={itemVariants}
          className={textClasses}
        >
          {title}
        </motion.div>
      </motion.div>
    </Link>
  );
});

NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
