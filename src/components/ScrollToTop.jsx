import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        let timeoutId;
        if (hash) {
            // Wait for DOM to update if necessary (small timeout)
            timeoutId = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
