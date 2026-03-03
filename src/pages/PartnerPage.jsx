import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './PartnerPage.css';

const PARTNER_TYPES = [
    { icon: 'building', title: 'Architects & Designers', desc: 'Specify our premium uPVC systems in your projects with confidence. Technical drawings, samples, and support provided.', benefit: 'Technical Support Provided' },
    { icon: 'hammer', title: 'Contractors & Builders', desc: 'Reliable supply, competitive trade pricing, and professional installation support for your projects.', benefit: 'Trade Pricing Available' },
    { icon: 'home', title: 'Interior Designers', desc: 'A complete range of premium window finishes and color profiles to complement any interior design scheme.', benefit: 'Sample Kit on Request' },
    { icon: 'store', title: 'Channel Partners / Dealers', desc: 'Become a dealer in your city. Grow with one of Hyderabad\'s most trusted uPVC brands.', benefit: 'Exclusive Territory Options' },
];

const LEFT_BENEFITS = ['Competitive trade pricing', 'Dedicated relationship manager', 'Technical drawings and specifications', 'Product training and demonstrations', 'Marketing materials and product samples'];
const RIGHT_BENEFITS = ['Priority production scheduling', 'Site support during installation', 'After-sales warranty support', 'Co-branding opportunities', 'Referral incentive program'];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const PartnerPage = () => {
    const [form, setForm] = useState({ name: '', company: '', role: '', phone: '', email: '', city: '', partnerType: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => { document.title = 'Partner With Us — Sri Sampatti Enterprises'; }, []);

    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 5000); };

    return (
        <>
            <Navbar />
            <section className="ptn-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Partnerships</span>
                        <h1>Grow With <span className="accent">Sri Sampatti</span></h1>
                        <p className="ptn-hero__sub">We partner with architects, contractors, interior designers, and builders across South India</p>
                    </motion.div>
                </div>
            </section>

            <section className="ptn-types">
                <div className="container">
                    <motion.h2 className="car-section-title" {...fadeUp}>Who Should Partner With Us?</motion.h2>
                    <div className="ptn-types__grid">
                        {PARTNER_TYPES.map((pt, i) => (
                            <motion.div key={i} className="glass-card ptn-type" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    {pt.icon === 'building' && <><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><path d="M9 22v-4h6v4" /></>}
                                    {pt.icon === 'hammer' && <><path d="M15 12l-8.5 8.5A2.12 2.12 0 1 1 3.5 17.5L12 9" /><path d="M17.64 15L22 10.64" /><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5L14.5 2.5 12 5l2 2-1 1" /></>}
                                    {pt.icon === 'home' && <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>}
                                    {pt.icon === 'store' && <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><rect x="9" y="14" width="6" height="8" /><line x1="9" y1="2" x2="9" y2="5" /></>}
                                </svg>
                                <h3>{pt.title}</h3>
                                <p>{pt.desc}</p>
                                <span className="ptn-type__benefit">{pt.benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ptn-benefits">
                <div className="container">
                    <motion.h2 className="car-section-title" {...fadeUp}>What You Get as a Partner</motion.h2>
                    <div className="ptn-benefits__cols">
                        {[LEFT_BENEFITS, RIGHT_BENEFITS].map((col, ci) => (
                            <div key={ci} className="ptn-benefits__col">
                                {col.map((item, i) => (
                                    <motion.div key={i} className="ptn-check" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: (ci * 5 + i) * 0.06 }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ptn-form-section">
                <div className="container">
                    <div className="car-form-card glass-card">
                        <h3>Enquire About Partnership</h3>
                        <p className="car-form-sub">Tell us about your projects and we'll explore how we can work together</p>
                        {submitted ? (
                            <motion.div className="car-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                <span>✅ Thanks! Our partnerships team will contact you within 48 hours.</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="car-form">
                                <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                                <input type="text" placeholder="Role / Designation" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
                                <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                <input type="text" placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                                <select value={form.partnerType} onChange={e => setForm({ ...form, partnerType: e.target.value })}>
                                    <option value="">Select Partner Type</option>
                                    <option value="Architect">Architect / Designer</option>
                                    <option value="Contractor">Contractor / Builder</option>
                                    <option value="Designer">Interior Designer</option>
                                    <option value="Dealer">Channel Partner / Dealer</option>
                                    <option value="Other">Other</option>
                                </select>
                                <textarea placeholder="Tell us about your projects and requirements" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                                <motion.button type="submit" className="btn-primary car-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>Submit Enquiry</motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PartnerPage;
