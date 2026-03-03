import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { SERVICE_AREAS } from '../data/serviceAreas';
import './ServiceAreasPage.css';

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const ServiceAreasPage = () => {
    const navigate = useNavigate();
    useEffect(() => { document.title = 'Service Areas — Sri Sampatti Enterprises'; }, []);

    return (
        <>
            <Navbar />
            <section className="sa-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Where We Serve</span>
                        <h1>Serving Across <span className="accent">South India</span></h1>
                        <p className="sa-hero__sub">Free site visits available across our complete service area</p>
                    </motion.div>
                </div>
            </section>

            <section className="sa-map">
                <div className="container">
                    <motion.div className="sa-map__card glass-card" {...fadeUp}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        <h3>Interactive Map — Coming Soon</h3>
                        <p>Serving Telangana | Andhra Pradesh | Karnataka</p>
                    </motion.div>

                    <div className="sa-states">
                        {SERVICE_AREAS.map((area, i) => (
                            <motion.div key={area.state} className="glass-card sa-state" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <h3 className="sa-state__name">{area.state}</h3>
                                <div className="sa-state__divider" />
                                <div className="sa-state__cities">
                                    {area.cities.map(city => (
                                        <div key={city} className="sa-city">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                            <span>{city}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="sa-state__badge">✓ Free site visit available</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sa-promises">
                <div className="container">
                    <div className="sa-promises__grid">
                        {[
                            { icon: 'clock', title: 'Free Site Visit in 48 Hours', desc: 'Schedule a consultation and we\'ll visit your location within 48 hours — at no cost.' },
                            { icon: 'truck', title: 'Delivery Across Service Area', desc: 'Products manufactured in our Hyderabad facility and delivered directly to your project site.' },
                            { icon: 'wrench', title: 'After-Sales Support', desc: 'Our service team is available across the service area for maintenance, adjustments, and support.' },
                        ].map((item, i) => (
                            <motion.div key={i} className="glass-card sa-promise" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    {item.icon === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                                    {item.icon === 'truck' && <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
                                    {item.icon === 'wrench' && <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>}
                                </svg>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sa-cta">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2>Don't See Your City?</h2>
                    <p>We're expanding. Get in touch and we'll tell you if we can serve your location.</p>
                    <motion.button className="sa-cta__btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 300); }}>Contact Us</motion.button>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ServiceAreasPage;
