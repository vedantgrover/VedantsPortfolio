'use client'

import React, {memo, useState} from "react";
import Link from "next/link";

interface ProjectTileInterface {
    title: string;
    href: string;
    key?: string;
    children?: React.ReactNode;
}

const ProjectTile = memo(({key, title, children, href}: ProjectTileInterface) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            key={key}
            className={`rounded-3xl  ${hover ? "bg-white" : "bg-stone-300 flex items-center justify-center"}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {hover ? <div className="flex flex-col justify-between h-full p-8">
                    <div>
                        <h1 className="font-bold">{title}</h1>
                        <p>{children}</p>
                    </div>
                    <Link href={href}>
                        <div
                            className="flex flex-row space-x-3 border-2 w-min p-4 rounded-full border-black hover:bg-zinc-400">
                            <h1 className="flex items-center justify-center text-xl">Github</h1>
                        </div>
                    </Link>
                </div> :
                <div>
                    <h1>{title}</h1>
                </div>
            }
        </div>
    )
})

ProjectTile.displayName = "ProjectTile";

export default ProjectTile