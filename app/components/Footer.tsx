import {memo} from "react";

const Footer = memo(() => {
    return (
        <footer className="flex flex-row justify-between h-[150px] px-16">
            <div className="flex items-center text-lg">
                <div>&copy; {new Date().getFullYear()} Vedant Grover. All Rights Reserved</div>
            </div>
        </footer>
    )
})

Footer.displayName = "Footer";

export default Footer