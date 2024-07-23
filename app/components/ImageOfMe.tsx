'use client'

import {memo} from "react";
import Image from "next/image";

const ImageOfMe = memo(() => {
    return (
        <div
            className="h-[300px] w-[300px] overflow-hidden z-[1] rounded-[48px] justify-center shadow-md">
            <Image src={"/me.jpg"} alt={"Vedant"} width={300} height={300} className="relative -top-14 mx-auto" />
        </div>
    )
})

ImageOfMe.displayName = "ImageOfMe"

export default ImageOfMe