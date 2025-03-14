import { memo } from "react";
import DownArrow from "./icons/DownArrow";
import Link from "next/link";

const ScrollButton = memo(() => {
  return (
    <Link href="/#about" className="h-min w-min dark:border-white/80 border-[#333333] rounded-full border-dashed p-1 border-2 animate-bounce">
      <DownArrow />
    </Link>
  );
});

ScrollButton.displayName = "ScrollButton";

export default ScrollButton;
