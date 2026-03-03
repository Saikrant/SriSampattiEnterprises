import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const t1 = setTimeout(() => setStep(1), 1000);
        const t2 = setTimeout(() => setStep(2), 1500);
        const t3 = setTimeout(() => setStep(3), 1900);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    return (
        <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: step === 3 ? 0 : 1 }}
            transition={{ duration: 0.35, delay: step === 3 ? 0 : 0 }}
            onAnimationComplete={() => { if (step === 3) onComplete(); }}
        >
            {/* SVG Window Frame */}
            <svg
                className="loader__icon"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    x="3" y="3" width="114" height="114" rx="4"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                />
                <motion.line
                    x1="60" y1="3" x2="60" y2="117"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
                />
                <motion.line
                    x1="3" y1="60" x2="117" y2="60"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
                />
            </svg>

            {/* Brand Text */}
            <motion.div
                className="loader__brand"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 12 }}
                transition={{ duration: 0.5 }}
            >
                <span className="loader__name">Sri Sampatti</span>
                <span className="loader__sub mono">ENTERPRISES</span>
            </motion.div>

            {/* Orange Underline */}
            <motion.div
                className="loader__line"
                initial={{ width: 0 }}
                animate={{ width: step >= 2 ? 60 : 0 }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
};

export default Loader;
