import {memo} from "react";
import ChangingRoleText from "@/app/components/ChangingRoleText";

const Greeting = memo(() => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="text-5xl font-[500] tracking-wider pb-2">Hi, I&apos;m <b>Vedant!</b></h1>
            <ChangingRoleText/>
        </div>
    )
})

Greeting.displayName = "Greeting"

export default Greeting