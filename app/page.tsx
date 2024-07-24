import HomeSection from "@/app/sections/HomeSection";

export default function Home() {
    return (
        <div className="flex flex-col justify-between">
            <HomeSection/>
            <section id="about" className="h-screen">About Me</section>
        </div>
    );
}
