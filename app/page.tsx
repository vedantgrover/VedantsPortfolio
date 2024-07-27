import HomeSection from "@/app/sections/HomeSection";
import AboutSection from "@/app/sections/AboutSection";

export default function Home() {
    return (
        <div className="flex flex-col justify-between">
            <HomeSection/>
            <AboutSection/>
        </div>
    );
}
