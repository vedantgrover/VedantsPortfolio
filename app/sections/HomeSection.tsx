import { memo } from "react";
import Greeting from "@/app/components/Greeting";
import ScrollButton from "../components/ScrollButton";

const HomeSection = memo(() => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center max-h-screen h-screen"
    >
      <div>
        <Greeting />
      </div>
      <div className="absolute bottom-10">
        <ScrollButton />
      </div>
    </section>
  );
});

HomeSection.displayName = "HomeSection";

export default HomeSection;
