import { memo, ReactNode } from "react";

interface AboutMeTextProps {
  title: string;
  children: ReactNode;
}

const AboutMeText = memo(({ title, children }: AboutMeTextProps) => {
  return (
    <div className="mt-[13px] static w-[50%] h-[98vh] text-left flex flex-col ml-auto mr-[25.2px] justify-center items-start">
      <h4 className="text-3xl font-[500] pr-[0.6rem] tracking-[.4px] text-black dark:text-white">
        {title}
      </h4>
      <p className="text-black dark:text-white text-xl pb-[10px] tracking-[0.38px] pt-[0.3rem]">
        {children}
      </p>
    </div>
  );
});

AboutMeText.displayName = "AboutMeText";

export default AboutMeText;
