import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BrochureButton.css';

const BrochureButton = () => {
    const [toast, setToast] = useState(false);

    const handleClick = () => {
        // TODO: Replace with actual PDF download
        // href="/brochure/sri-sampatti-brochure.pdf" download
        setToast(true);
        setTimeout(() => setToast(false), 3000);
    };

    return (
        <div className="brochure-wrap">
            <motion.button className="brochure-btn" onClick={handleClick} whileHover={{ y: -1, borderColor: 'var(--accent)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Brochure
            </motion.button>
            <AnimatePresence>
                {toast && (
                    <motion.div className="brochure-toast" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 8 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
                        📄 Brochure coming soon! Contact us for a digital copy.
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BrochureButton;
