import {memo} from "react";

const CatchySloganBox = memo(() => {
    return (
        <div className="mt-8 w-[87%]">
            <h1 className="text-yellow-500 text-xl font-bold">Making a positive dent in the universe, one pixel at a
                time.</h1>
            <p className="mt-2 text-yellow-500 italic">I aspire to be a Software Engineer, working to create innovative
                solutions to everyday problems.</p>
        </div>
    )
})

CatchySloganBox.displayName = "CatchySloganBox"

export default CatchySloganBox