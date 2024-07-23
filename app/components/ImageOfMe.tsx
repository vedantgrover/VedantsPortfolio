import {memo} from "react";
import Image from "next/image";

const ImageOfMe = memo(() => {
    return (
        <div
            className="h-[280px] w-[280px] overflow-hidden z-[1] rounded-[48px] justify-center shadow-md">
            <Image src={"/me.jpg"} alt={"Vedant"} width={280} height={250} className="relative -top-14" />
        </div>
    )
})

ImageOfMe.displayName = "ImageOfMe"

export default ImageOfMe