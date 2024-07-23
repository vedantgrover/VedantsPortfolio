import {memo} from "react";
import ChangingRoleText from "@/app/components/ChangingRoleText";
import ImageOfMe from "@/app/components/ImageOfMe";
import DownloadCVButton from "@/app/components/DownloadCVButton";

const Greeting = memo(() => {
    return (
        <div className="flex flex-col items-center justify-between space-y-4">
            <h1 className="text-5xl font-[500] tracking-wider">Hi, I&apos;m <b>Vedant!</b></h1>
            <ChangingRoleText/>
            <ImageOfMe />
            <DownloadCVButton />
        </div>
    )
})

Greeting.displayName = "Greeting"

export default Greeting