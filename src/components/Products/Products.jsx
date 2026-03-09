import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import ProductCard from './ProductCard';
import ProductModal from '../Modal/ProductModal';
import './Products.css';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const carouselRef = useRef(null);

    /* Window-frame reveal: panels slide apart as user scrolls into section */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'start 0.3'],
    });
    const leftPanelX = useTransform(scrollYProgress, [0, 1], ['0%', '-105%']);
    const rightPanelX = useTransform(scrollYProgress, [0, 1], ['0%', '105%']);
    const revealOpacity = useTransform(scrollYProgress, [0, 0.6], [0.8, 0]);

    const handleLearnMore = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    /* Mobile horizontal scroll tracking */
    const handleScroll = () => {
        const el = carouselRef.current;
        if (!el) return;
        const scrollLeft = el.scrollLeft;
        const cardWidth = el.firstElementChild?.offsetWidth || 280;
        const gap = 16;
        setActiveIndex(Math.round(scrollLeft / (cardWidth + gap)));
    };

    return (
        <section id="products" className="products" ref={sectionRef}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="pill-label">Our Product Range</span>
                    <h2>Premium uPVC Windows &amp; Doors</h2>
                    <p>German-engineered uPVC systems by Sudhakar Profiles</p>
                </motion.div>

                {/* Window-frame reveal overlay (desktop only) */}
                <div className="products__reveal-overlay">
                    <motion.div
                        className="products__reveal-panel products__reveal-panel--left"
                        style={{ x: leftPanelX, opacity: revealOpacity }}
                    >
                        <svg viewBox="0 0 120 200" fill="none" className="products__window-svg">
                            <rect x="4" y="4" width="112" height="192" rx="4" stroke="var(--accent)" strokeWidth="2" />
                            <line x1="60" y1="4" x2="60" y2="196" stroke="var(--accent)" strokeWidth="1.5" />
                            <line x1="4" y1="100" x2="116" y2="100" stroke="var(--accent)" strokeWidth="1.5" />
                        </svg>
                    </motion.div>
                    <motion.div
                        className="products__reveal-panel products__reveal-panel--right"
                        style={{ x: rightPanelX, opacity: revealOpacity }}
                    >
                        <svg viewBox="0 0 120 200" fill="none" className="products__window-svg">
                            <rect x="4" y="4" width="112" height="192" rx="4" stroke="var(--accent)" strokeWidth="2" />
                            <line x1="60" y1="4" x2="60" y2="196" stroke="var(--accent)" strokeWidth="1.5" />
                            <line x1="4" y1="100" x2="116" y2="100" stroke="var(--accent)" strokeWidth="1.5" />
                        </svg>
                    </motion.div>
                </div>

                {/* Desktop grid */}
                <div className="products__grid products__grid--desktop">
                    {PRODUCTS.map((product, i) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={i}
                            onLearnMore={handleLearnMore}
                        />
                    ))}
                </div>

                {/* Mobile horizontal carousel */}
                <div className="products__carousel-wrapper">
                    <div
                        className="products__carousel"
                        ref={carouselRef}
                        onScroll={handleScroll}
                    >
                        {PRODUCTS.map((product, i) => (
                            <div key={product.id} className="products__carousel-item">
                                <ProductCard
                                    product={product}
                                    index={i}
                                    onLearnMore={handleLearnMore}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Dot indicators */}
                    <div className="products__dots">
                        {PRODUCTS.map((_, i) => (
                            <span
                                key={i}
                                className={`products__dot ${i === activeIndex ? 'products__dot--active' : ''}`}
                            />
                        ))}
                    </div>
                    {/* Swipe hint */}
                    <motion.div
                        className="products__swipe-hint"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.4, 1], x: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: 3, delay: 1 }}
                    >
                        <span className="mono">SWIPE</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Products;
