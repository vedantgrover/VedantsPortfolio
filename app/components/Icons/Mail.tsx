'use client'

import {useEffect, useState} from "react";

export default function Mail() {
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("rgba(234, 178, 8, 1)")

    useEffect(() => {
        if (hover) {
            setBackgroundColor("rgba(202, 139, 4, 1)")
        } else {
            setBackgroundColor("rgba(234, 178, 8, 1)")
        }
    }, [hover]);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
             onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
             style={{fill: backgroundColor}}>
            <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
        </svg>
    )
}