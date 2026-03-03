import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * SectionReveal — wraps any section with a sliding panel transition.
 * Automatically reduces animation range on mobile to prevent overflow.
 */
const SectionReveal = ({ children, direction = 'left', className = '' }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start 0.5'],
    });

    /* Reduce x-shift on mobile to prevent overflow */
    const xPx = isMobile ? 20 : 60;
    const xStart = direction === 'left' ? -xPx : xPx;
    const x = useTransform(scrollYProgress, [0, 1], [xStart, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

    return (
        <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
            <motion.div style={{ x, opacity, scale }}>
                {children}
            </motion.div>
        </div>
    );
};

export default SectionReveal;
