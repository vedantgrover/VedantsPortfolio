import {memo} from "react";
import Image from "next/image";
import StackCard from "@/app/components/StackCard";

const ImageCarousel = memo(() => {
    return (
        <StackCard>
            <div>
                <Image src={"/me.jpg"} alt={"Meeeee"} layout="fill" objectFit="cover"/>
            </div>
        </StackCard>
    )
})

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel