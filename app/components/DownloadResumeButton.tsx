'use client'

import {memo} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

const DownloadResumeButton = memo(() => {
    return (
        <motion.div
            whileHover={{ translateY: -5 }}
            className="w-[300px] h-[75px] rounded-full border-[6px] border-blue-200 flex flex-row justify-between shadow-md">
            <Link
                href="https://www.dropbox.com/scl/fi/z468rpz92g8j91bhaym43/VGResume.docx?rlkey=2y3iueyosq7wxt0q7m68azczy&dl=1"
                target="_blank" className="w-full h-full flex justify-center items-center">
                <p className="font-bold text-xl">Download Resume</p>
            </Link>
        </motion.div>
    )
})

DownloadResumeButton.displayName = "DownloadResumeButton";

export default DownloadResumeButton