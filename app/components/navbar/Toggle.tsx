import * as React from "react";
import {memo} from "react";
import {motion} from "framer-motion";

interface PathProps {
    d?: string,
    variants: { closed: { d?: string, opacity?: number }, open: { d?: string, opacity?: number } },
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        d={props.d}
        variants={props.variants}
        transition={props.transition}
    />
);

const Toggle = memo(({toggle}: { toggle: () => void }) => (
    <button onClick={toggle}
            className="flex justify-center items-center absolute top-[18px] left-[15px] w-[50px] h-[50px] rounded-full bg-white dark:bg-zinc-700 z-[950]">
        <svg width="24" height="24" viewBox="0 0 24 24">
            <Path
                variants={{
                    closed: {d: "M 2 2.5 L 20 2.5"},
                    open: {d: "M 3 16.5 L 17 2.5"}
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: {opacity: 1},
                    open: {opacity: 0}
                }}
                transition={{duration: 0.1}}
            />
            <Path
                variants={{
                    closed: {d: "M 2 16.346 L 20 16.346"},
                    open: {d: "M 3 2.5 L 17 16.346"}
                }}
            />
        </svg>
    </button>
));

Toggle.displayName = "Toggle";

export default Toggle