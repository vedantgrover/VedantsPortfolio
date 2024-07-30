'use client'

import {memo} from "react";
import Image from "next/image";

interface MobileAboutMeDetailProps {
    title: string;
    description: string;
    image: string;
}
const MobileAboutMeDetail = memo(({title, description, image}: MobileAboutMeDetailProps) => {
    return (
        <div className="flex flex-col items-center my-8 space-y-4 text-center">
            <h4 className="text-3xl font-[500] pr-[0.6rem] tracking-[.4px] text-black">{title}</h4>
            <p className="mx-4 text-black text-xl pb-[10px] tracking-[0.38px] pt-[0.3rem]">{description}</p>
            <div className="h-[300px] w-[300px] overflow-hidden z-[1] rounded-[48px] justify-center shadow-md">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="object-cover h-full"
                    />
            </div>
        </div>
    )
})

MobileAboutMeDetail.displayName = "MobileAboutMeDetail"

export default MobileAboutMeDetail