import {memo} from "react";
import Greeting from "@/app/components/Greeting";

const HomeSection = memo(() => {
    return (
        <section id="home" className="flex justify-center items-center border h-screen">
            <div>
                <Greeting/>
            </div>
        </section>
    )
})

HomeSection.displayName = "HomeSection"

export default HomeSection;