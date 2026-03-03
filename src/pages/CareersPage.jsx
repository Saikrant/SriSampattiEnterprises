import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CareersPage.css';

const JOBS = [
    { title: 'Site Installation Supervisor', type: 'Full Time', location: 'Hyderabad', experience: '3-5 years', department: 'Operations' },
    { title: 'Sales Executive — B2B', type: 'Full Time', location: 'Hyderabad / AP', experience: '2-4 years', department: 'Sales' },
    { title: 'AutoCAD Draftsman', type: 'Full Time', location: 'Hyderabad', experience: '1-3 years', department: 'Design' },
    { title: 'Customer Support Executive', type: 'Full Time', location: 'Hyderabad', experience: '1-2 years', department: 'Support' },
];

const BENEFITS = [
    { icon: 'growth', title: 'Career Growth', desc: 'Clear progression paths' },
    { icon: 'people', title: 'Great Team', desc: 'Experienced, supportive colleagues' },
    { icon: 'award', title: 'Recognition', desc: 'Performance-based rewards' },
    { icon: 'loc', title: 'Hyderabad Based', desc: 'Work close to home' },
];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CareersPage = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
    const [resume, setResume] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => { document.title = 'Careers — Sri Sampatti Enterprises'; }, []);

    const scrollToForm = () => { const el = document.getElementById('apply-form'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

    return (
        <>
            <Navbar />
            <section className="car-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Join Our Team</span>
                        <h1>Build Your Career <span className="accent">With Us</span></h1>
                        <p className="car-hero__sub">Be part of Hyderabad's most trusted uPVC manufacturer</p>
                    </motion.div>
                </div>
            </section>

            <section className="car-benefits">
                <div className="container">
                    <motion.h2 className="car-section-title" {...fadeUp}>Why Work at Sri Sampatti?</motion.h2>
                    <div className="car-benefits__grid">
                        {BENEFITS.map((b, i) => (
                            <motion.div key={i} className="glass-card car-benefit" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    {b.icon === 'growth' && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>}
                                    {b.icon === 'people' && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                                    {b.icon === 'award' && <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>}
                                    {b.icon === 'loc' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>}
                                </svg>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="car-jobs">
                <div className="container">
                    <motion.h2 className="car-section-title" {...fadeUp}>Current Openings</motion.h2>
                    <div className="car-jobs__list">
                        {JOBS.map((job, i) => (
                            <motion.div key={i} className="glass-card car-job" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -3 }}>
                                <div className="car-job__left">
                                    <span className="car-job__dept mono">{job.department}</span>
                                    <h3>{job.title}</h3>
                                    <div className="car-job__meta">
                                        <span>📍 {job.location}</span>
                                        <span>⏱ {job.experience}</span>
                                        <span>💼 {job.type}</span>
                                    </div>
                                </div>
                                <motion.button className="btn-ghost" whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }} onClick={scrollToForm}>Apply Now</motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="car-form-section" id="apply-form">
                <div className="container">
                    <div className="car-form-card glass-card">
                        <h3>Apply Now</h3>
                        <p className="car-form-sub">Send us your details and we'll be in touch</p>
                        {submitted ? (
                            <motion.div className="car-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                <span>✅ Application received! We'll review and contact you.</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="car-form">
                                <input type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                <select required value={form.position} onChange={e => setForm({ ...form, position: e.target.value })}>
                                    <option value="">Select Position</option>
                                    {JOBS.map((j, i) => <option key={i} value={j.title}>{j.title}</option>)}
                                    <option value="Other">Other</option>
                                </select>
                                <input type="text" placeholder="Years of Experience" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />
                                <textarea placeholder="Message / Cover Letter" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                <label className="car-resume">
                                    <input type="file" accept=".pdf,.doc,.docx" onChange={e => setResume(e.target.files[0])} />
                                    <span>📎 {resume ? resume.name : 'Attach Resume (PDF, max 5MB)'}</span>
                                </label>
                                <motion.button type="submit" className="btn-primary car-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>Submit Application</motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CareersPage;
