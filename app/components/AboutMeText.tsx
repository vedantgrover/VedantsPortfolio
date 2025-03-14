import { memo, ReactNode } from "react";

interface AboutMeTextProps {
  title: string;
  children: ReactNode;
}

const AboutMeText = memo(({ title, children }: AboutMeTextProps) => {
  return (
    <div className="mt-[13px] static w-[50%] h-[98vh] text-center flex flex-col ml-auto mr-[25.2px] justify-center items-center">
      <h4 className="text-3xl font-[500] tracking-[.4px] text-black dark:text-white">
        {title}
      </h4>
      <p className="text-black dark:text-white text-xl pb-[10px] tracking-[0.38px] pt-[0.3rem] max-w-[80%]">
        {children}
      </p>
    </div>
  );
});

AboutMeText.displayName = "AboutMeText";

export default AboutMeText;