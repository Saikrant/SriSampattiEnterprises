import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage';
import './AboutPage.css';

const MILESTONES = [
    { year: '1998', event: 'Founded in Hyderabad with a vision to bring world-class window solutions to Indian homes' },
    { year: '2005', event: 'Became authorized fabricator for Sudhakar Profiles — India\'s leading uPVC brand' },
    { year: '2012', event: 'Expanded operations to serve Andhra Pradesh and Karnataka markets' },
    { year: '2018', event: 'Adopted German manufacturing technology for precision fabrication' },
    { year: '2024', event: 'Completed 500+ successful installations across South India' },
];

const CERTS = [
    { icon: 'shield', title: 'Authorized Fabricator', sub: 'Sudhakar Profiles' },
    { icon: 'award', title: 'ISO 9001:2015', sub: 'Quality Certified' },
    { icon: 'star', title: 'German Technology', sub: 'Certified Manufacturing' },
    { icon: 'handshake', title: '15+ Year Partnership', sub: 'Sudhakar Profiles' },
];

const CertIcon = ({ type }) => {
    const props = { width: 48, height: 48, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--accent)', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'shield') return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
    if (type === 'award') return <svg {...props}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
    if (type === 'star') return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
};

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' }, transition: { duration: 0.6 } };

const AboutPage = () => {
    useEffect(() => { document.title = 'About Us — Sri Sampatti Enterprises'; }, []);

    return (
        <>
            <Navbar />
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Our Story</span>
                        <h1>Crafting Excellence<br />Since <span className="accent">1998.</span></h1>
                        <p className="about-hero__sub">From a small workshop in Hyderabad to one of Telangana's most trusted uPVC manufacturers — our journey has always been about quality.</p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="about-story">
                <div className="container">
                    <div className="about-story__grid">
                        <motion.div {...fadeUp} className="about-story__text">
                            <h2>Who We Are</h2>
                            <p>Sri Sampatti Enterprises was founded in 1998 in Hyderabad with a singular mission: to bring world-class window and door solutions to Indian homes at accessible prices. What began as a small fabrication workshop has grown into one of South India's most respected uPVC manufacturers.</p>
                            <p>Our partnership with Sudhakar Profiles, established in 2005, was a turning point. As authorized fabricators, we gained access to India's finest uPVC profiles — manufactured with German technology and tested to withstand the harshest Indian climatic conditions. This partnership allowed us to deliver consistent, premium-quality products to every customer.</p>
                            <p>In 2018, we adopted German manufacturing processes including CNC cutting, automated welding, and precision corner cleaning. These investments in technology mean every window and door leaving our factory meets international standards of accuracy and finish quality. Today, with 500+ completed projects across Telangana, Andhra Pradesh, and Karnataka, we continue to set the benchmark for uPVC excellence in South India.</p>

                            <div className="about-timeline">
                                {MILESTONES.map((m, i) => (
                                    <motion.div key={i} className="about-timeline__item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                                        <span className="about-timeline__year mono">{m.year}</span>
                                        <span className="about-timeline__event">{m.event}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeUp} className="about-story__img" transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="glass-card" style={{ padding: 24 }}>
                                <PlaceholderImage icon="building" text="Company Photo — Coming Soon" subtext="Factory & team photo" aspectRatio="3/4" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="about-mv">
                <div className="container">
                    <div className="about-mv__grid">
                        <motion.div className="glass-card about-mv__card" {...fadeUp}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                            <h3>Our Mission</h3>
                            <p>To deliver world-class uPVC window and door systems that enhance comfort, security, and aesthetics for every Indian home — backed by German technology and exceptional after-sales service.</p>
                        </motion.div>
                        <motion.div className="glass-card about-mv__card" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            <h3>Our Vision</h3>
                            <p>To be the most trusted name in premium uPVC fenestration across South India — setting the benchmark for quality, innovation, and customer satisfaction in every installation we deliver.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="about-founder">
                <div className="container">
                    <div className="about-founder__grid">
                        <motion.div className="about-founder__avatar" {...fadeUp}>
                            <div className="glass-card" style={{ padding: 32, textAlign: 'center' }}>
                                <div className="about-founder__circle">SS</div>
                                <span className="about-founder__role mono">Founder & Managing Director</span>
                                <span className="about-founder__company">Sri Sampatti Enterprises</span>
                                <span className="about-founder__note">(Photo — Coming Soon)</span>
                            </div>
                        </motion.div>
                        <motion.div className="about-founder__msg" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
                            <span className="pill-label">Founder's Message</span>
                            <h2>A Word From Our Founder</h2>
                            <svg className="about-founder__quote" width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.3"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                            <blockquote>
                                When I started Sri Sampatti Enterprises in 1998, my vision was simple: to bring world-class window and door solutions to Indian homes. Over the past 25 years, we have remained committed to that vision — using the finest materials, the best technology, and a team that genuinely cares about every installation we deliver.<br /><br />
                                Our partnership with Sudhakar Profiles and adoption of German manufacturing processes has been transformative. Today, when I see a family enjoying their monsoon-proof, noise-free home because of our windows — that is what drives us forward.
                            </blockquote>
                            <span className="about-founder__sig">— Founder, Sri Sampatti Enterprises</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="about-certs">
                <div className="container">
                    <motion.div className="section-header" {...fadeUp}>
                        <h2>Certifications & Partnerships</h2>
                    </motion.div>
                    <div className="about-certs__row">
                        {CERTS.map((c, i) => (
                            <motion.div key={i} className="glass-card about-certs__card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                                <CertIcon type={c.icon} />
                                <span className="about-certs__title">{c.title}</span>
                                <span className="about-certs__sub mono">{c.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="about-certs__note">(Actual certification logos and documents to be added)</p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutPage;
