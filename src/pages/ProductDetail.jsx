import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = PRODUCTS.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        navigate('/');
        return null;
    }

    const scrollToContact = () => {
        navigate('/', { state: { scrollTo: 'contact' } });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <Navbar />

            {/* Breadcrumb */}
            <section className="pd-breadcrumb">
                <div className="container">
                    <motion.a
                        href="/"
                        className="pd-back"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    >
                        ← Back to Products
                    </motion.a>
                </div>
            </section>

            {/* Product Hero */}
            <section className="pd-hero">
                <div className="container pd-hero__grid">
                    <motion.div
                        className="pd-hero__left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="pill-label">{product.category}</span>
                        <h1 className="pd-hero__title">{product.name}</h1>
                        <p className="pd-hero__desc">{product.shortDesc}</p>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ y: -3, boxShadow: '0 12px 28px var(--accent-glow)' }}
                            whileTap={{ scale: 0.97 }}
                            onClick={scrollToContact}
                        >
                            Enquire Now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="pd-hero__right"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass-card pd-hero__card">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Highlights */}
            <section className="pd-section">
                <div className="container">
                    <span className="pd-label mono">System Highlights</span>
                    <motion.div
                        className="pd-chips"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                    >
                        {product.highlights.map((h, i) => (
                            <motion.span
                                key={i}
                                className="glass-card pd-chip"
                                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                            >
                                {h}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Configurations */}
            {product.configImage && (
                <section className="pd-section">
                    <div className="container">
                        <span className="pd-label mono">Configurations</span>
                        <div className="glass-card pd-config-card">
                            <img src={product.configImage} alt={`${product.name} configurations`} />
                        </div>
                    </div>
                </section>
            )}

            {/* Series */}
            {product.series && product.series.length > 0 && (
                <section className="pd-section">
                    <div className="container">
                        <span className="pd-label mono">Profile Series</span>
                        <div className="pd-series-grid">
                            {product.series.map((s, i) => (
                                <motion.div
                                    key={i}
                                    className="glass-card pd-series-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <img src={s.image} alt={s.name} />
                                    <span className="pd-series-name mono">{s.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Applications */}
            <section className="pd-section">
                <div className="container">
                    <span className="pd-label mono">Applications</span>
                    <div className="pd-chips">
                        {product.applications.map((a, i) => (
                            <span key={i} className="glass-card pd-chip pd-chip--accent">{a}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="pd-cta">
                <div className="container pd-cta__inner">
                    <div>
                        <h3>Ready to install {product.name}?</h3>
                        <p>Get a free consultation and quote within 24 hours.</p>
                    </div>
                    <motion.button
                        className="pd-cta__btn"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={scrollToContact}
                    >
                        Request Free Quote
                    </motion.button>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
};

export default ProductDetail;
