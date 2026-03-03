import { motion } from 'framer-motion';
import './Features.css';

const FEATURES = [
    {
        id: 1,
        title: 'Water Resistant',
        desc: 'Designed to withstand heavy Indian monsoons with excellent water tightness.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12Z" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeInOut' }} />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Sound Insulation',
        desc: 'Double weather-stripping for maximum noise reduction and peace.',
        featured: true,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M5 12Q7 8 9 12Q11 16 13 12Q15 8 17 12Q19 16 21 12" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }} />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Thermal Insulation',
        desc: 'Multi-chambered design keeps your home cool in summer and warm in winter.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M12 2v10M12 14a4 4 0 1 0 0 8 4 4 0 1 0 0-8" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }} />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Wind Resistant',
        desc: 'Heavy-duty reinforcement to withstand high wind loads.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M3 8h12a3 3 0 1 0 0-6M3 12h15a3 3 0 1 1 0 6M3 16h9a3 3 0 1 1 0 6" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }} />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Eco Friendly',
        desc: 'Lead-free and 100% recyclable materials for a sustainable future.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M12 22C6 18 2 12 4 6s10-4 14-2 4 8 4 14c-6-4-10 4-10 4Z" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }} />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Termite & Rust Free',
        desc: 'Completely resistant to termites, rust, and corrosion.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path d="M12 2L3 7v5c0 6 4 10 9 12 5-2 9-6 9-12V7Z" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }} />
            </svg>
        ),
    },
];

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="pill-label">Why Choose Us</span>
                    <h2>Built Different. Built to Last.</h2>
                    <p>Why Sudhakar Profiles are the best choice for your home</p>
                </motion.div>

                <div className="features__grid">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.id}
                            className={`feature-card glass-card ${f.featured ? 'feature-card--featured' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6, borderColor: 'rgba(200,75,26,0.3)' }}
                        >
                            <div className="feature-card__icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
