import {memo} from "react";
import Greeting from "@/app/components/Greeting";
import MarqueeText from "@/app/components/MarqueeText";

const HomeSection = memo(() => {
    return (
        <section id="home" className="flex justify-center items-center border h-screen">
            <div className="absolute overflow-x-hidden">
                <MarqueeText />
            </div>
            <div>
                <Greeting/>
            </div>
        </section>
    )
})

HomeSection.displayName = "HomeSection"

export default HomeSection;