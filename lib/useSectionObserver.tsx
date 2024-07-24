import {useEffect, useState} from "react";

function useSectionObserver(sectionId: string) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting);
            }, {
                rootMargin: "0px",
                threshold: 0.5
            }
        );

        const element = document.getElementById(sectionId);
        // console.log(element.id)

        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        };
    }, [sectionId]);

    return isVisible
}

export default useSectionObserver