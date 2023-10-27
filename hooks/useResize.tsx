import { useEffect, useState } from "react";

export const useBrowerSizeDetect = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);

        const width = window.innerWidth;
        const height = window.innerHeight;

        setSize({ width, height });
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        size,
        isMobile,
    };
};
