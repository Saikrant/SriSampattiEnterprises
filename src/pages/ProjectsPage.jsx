import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage';
import { PROJECTS } from '../data/projects';
import './ProjectsPage.css';

const TYPES = ['All', 'Residential', 'Villa', 'Apartment', 'Commercial'];
const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    useEffect(() => { document.title = 'Projects — Sri Sampatti Enterprises'; }, []);

    const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter);

    return (
        <>
            <Navbar />
            <section className="proj-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Our Work</span>
                        <h1>500+ Projects. <span className="accent">One Standard.</span></h1>
                        <p className="proj-hero__sub">Real installations. Real homes. Real results.</p>
                    </motion.div>
                    <div className="proj-hero__stats">
                        {[['500+', 'Projects Completed'], ['25,000+', 'Sqft Installed'], ['3', 'States Covered']].map(([n, l], i) => (
                            <motion.div key={i} className="proj-hero__stat" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <span className="proj-hero__stat-num">{n}</span>
                                <span className="proj-hero__stat-label mono">{l}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="proj-grid-section">
                <div className="container">
                    <div className="proj-filters">
                        {TYPES.map(t => (
                            <motion.button key={t} className={`proj-filter ${filter === t ? 'proj-filter--active' : ''}`} onClick={() => setFilter(t)} whileTap={{ scale: 0.95 }}>
                                {t}
                            </motion.button>
                        ))}
                    </div>

                    <motion.div className="proj-grid" layout>
                        <AnimatePresence mode="popLayout">
                            {filtered.map(p => (
                                <motion.div key={p.id} className="proj-card" layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} whileHover={{ y: -4 }}>
                                    <div className="proj-card__img">
                                        <PlaceholderImage icon="building" text="Project Photo — Coming Soon" subtext={p.title} aspectRatio="4/3" />
                                    </div>
                                    <div className="proj-card__content">
                                        <span className="proj-card__badge mono">{p.type}</span>
                                        <h3 className="proj-card__title">{p.title}</h3>
                                        <span className="proj-card__loc">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                            {p.location}
                                        </span>
                                        <span className="proj-card__products">{p.productsUsed.join(' · ')}</span>
                                        <div className="proj-card__meta">
                                            <span className="proj-card__pill glass-card">{p.sqft}</span>
                                            <span className="proj-card__pill glass-card">{p.completedYear}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProjectsPage;
