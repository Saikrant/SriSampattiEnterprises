import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ProductModal.css';

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
};

const ProductModal = ({ product, isOpen, onClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    if (!product) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${product.name} details`}
                >
                    <motion.div
                        className="modal-box"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.button
                            className="modal-close"
                            onClick={onClose}
                            whileHover={{ color: 'var(--text-primary)', rotate: 90 }}
                            aria-label="Close modal"
                        >
                            ×
                        </motion.button>

                        <h2 className="modal-title">{product.name}</h2>

                        {/* Highlights */}
                        <div className="modal-section">
                            <span className="modal-label mono">Key Highlights</span>
                            <div className="modal-divider" />
                            <motion.ul
                                className="modal-list"
                                initial="hidden"
                                animate="show"
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                            >
                                {product.highlights.map((h, i) => (
                                    <motion.li
                                        key={i}
                                        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span>{h}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Applications */}
                        <div className="modal-section">
                            <span className="modal-label mono">Applications</span>
                            <div className="modal-divider" />
                            <motion.ul
                                className="modal-list"
                                initial="hidden"
                                animate="show"
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                            >
                                {product.applications.map((a, i) => (
                                    <motion.li
                                        key={i}
                                        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span>{a}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Actions */}
                        <div className="modal-actions">
                            <motion.button
                                className="btn-primary modal-action-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => { onClose(); setTimeout(() => scrollToSection('contact'), 100); }}
                            >
                                Enquire Now
                            </motion.button>
                            <motion.button
                                className="btn-ghost modal-action-btn"
                                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => { onClose(); navigate(`/products/${product.slug}`); }}
                            >
                                Product Details
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ProductModal;

