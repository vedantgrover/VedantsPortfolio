"use client";

import React, { memo } from "react";
import ChangingRoleText from "@/app/components/ChangingRoleText";
import ImageOfMe from "@/app/components/ImageOfMe";

const Greeting: React.FC = memo(() => {
  return (
    <div className="flex flex-col items-center justify-between space-y-4">
      <h1 className="text-5xl font-[500] tracking-tight xl:tracking-wider dark:text-white">
        Hi, I&apos;m <b>Vedant!</b>
      </h1>
      <ChangingRoleText />
      <ImageOfMe />
    </div>
  );
});

Greeting.displayName = "Greeting";

export default Greeting;
