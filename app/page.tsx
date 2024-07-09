import GreetingSection from "@/app/components/GreetingSection";
import CatchySloganBox from "@/app/components/CatchySloganBox";
import AboutMeStackCard from "@/app/components/StackCards/AboutMeStackCard";
import Footer from "@/app/components/Footer";
import ImageCarousel from "@/app/components/StackCards/ImageCarousel";
import ProjectsStackCard from "@/app/components/StackCards/ProjectsStackCard";

export default function Home() {
    return (
        <div className="flex flex-col lg:h-full bg-green-950">
            <div className="fixed w-full lg:h-[100vh] flex items-center">
                <div className="mx-auto lg:ml-16">
                    <GreetingSection/>
                    <CatchySloganBox/>
                    <Footer/>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ml-auto">
                <ImageCarousel/>
                <AboutMeStackCard/>
                <ProjectsStackCard/>
            </div>
        </div>
    );
}
