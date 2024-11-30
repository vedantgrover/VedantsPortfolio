import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
  selected: boolean;
  title: string;
  link: string;
}

const NavbarItem = memo(({ selected, title, link }: NavbarItemProps) => {
  return (
    <Link
      href={`#${link}`}
      className="relative py-[10px] px-[18px] text-center flex"
    >
      <motion.div initial="initial" whileHover="hovered">
        {selected && (
          <motion.div
            layoutId="activeBackground"
            className="absolute inset-0 bg-[#333333] dark:bg-white rounded-[96px] z-0"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: selected ? 0 : -5 },
          }}
          className={`${
            selected
              ? "text-white dark:text-black font-bold"
              : "text-black dark:text-zinc-100 font-normal"
          } relative z-10 text-[14px]`}
        >
          {title}
        </motion.div>
      </motion.div>
    </Link>
  );
});

NavbarItem.displayName = "NavbarItem";

export default NavbarItem;
