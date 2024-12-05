import { memo } from "react";
import DownArrow from "./icons/DownArrow";

const ScrollButton = memo(() => {
  return (
    <div className="h-min w-min dark:border-white/80 border-[#333333] rounded-full border-dashed p-1 border-2 animate-bounce">
      <DownArrow />
    </div>
  );
});

ScrollButton.displayName = "ScrollButton";

export default ScrollButton;
