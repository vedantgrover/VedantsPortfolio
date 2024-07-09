import {memo} from "react";

interface StackCardProps {
    children?: Readonly<{ children: React.ReactNode }>
    className?: string;
}

const StackCard = memo(({className, children}: StackCardProps) => {
    return (
        <div className={`sticky top-0 ${className}`}>
            <div className="h-[100vh]">{children}</div>
        </div>
    )
})

StackCard.displayName = "StackCard"

export default StackCard