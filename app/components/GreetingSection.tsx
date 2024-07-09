import {memo} from "react";

const GreetingSection = memo(() => {
    return (
        <>
            <p className="mx-auto lg:mx-0 text-yellow-500 font-bold text-5xl lg:text-7xl my-8">Vedant Grover</p>
            <div className="mx-auto lg:mx-0 border-2 lg:border-4 border-yellow-500 w-[84px] lg:w-[96px] rounded-full"/>
        </>
    )
})

GreetingSection.displayName = "GreetingSection"

export default GreetingSection