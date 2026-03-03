import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProductCard = ({ product, index, onLearnMore }) => {
    const cardRef = useRef(null);
    const [hovering, setHovering] = useState(false);
    const isTouch = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0;

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
    const rotateY = useTransform(mouseX, [0, 1], [-8, 8]);

    const handleMouseMove = (e) => {
        if (isTouch) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        setHovering(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`product-card ${index === 0 ? 'product-card--featured' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={isTouch ? {} : { rotateX, rotateY, transformPerspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ borderColor: 'rgba(200,75,26,0.4)' }}
            onClick={() => onLearnMore(product)}
        >
            <motion.div
                className="product-card__img"
                style={{ backgroundImage: `url(${product.image})` }}
                animate={{ scale: hovering ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
            />
            <div className="product-card__overlay" />
            <div className="product-card__content">
                <span className="product-card__cat mono">{product.category}</span>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.shortDesc}</p>
                <motion.button
                    className="btn-primary product-card__btn"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={(e) => { e.stopPropagation(); onLearnMore(product); }}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
