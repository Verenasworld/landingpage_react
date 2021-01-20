import {useLayoutEffect, useState} from "react";

export default function useWindowsPosition(id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offSetHeight = window.document.getElementById(id).offsetHeight;
            if (window.pageXOffset > offSetHeight * 0.7) {
                setAnimation(true);
            }
        }

        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, [id]);
    return animation;
}
