import HomeSection from "./sections/HomeSection";
import AboutSection from "@/app/sections/AboutSection";
import ContactSection from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center">
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
