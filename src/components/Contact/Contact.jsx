import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', location: '', requirement: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!formData.name || formData.name.length < 2) e.name = 'Name is required (min 2 chars)';
        if (!formData.phone || !isPossiblePhoneNumber(formData.phone)) e.phone = 'Valid phone number required';
        if (!formData.location) e.location = 'Location is required';
        if (!formData.requirement || formData.requirement.length < 10) e.requirement = 'Please describe your requirement (min 10 chars)';
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1200);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="pill-label">Get In Touch</span>
                    <h2>Let&apos;s Build Something Great</h2>
                    <p>Have questions? Our experts are here to help.</p>
                </motion.div>

                <div className="contact__grid">
                    {/* Left - Details */}
                    <motion.div
                        className="contact__details"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Contact Details</h3>

                        <div className="contact__item">
                            <div className="contact__icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div>
                                <span className="contact__label mono">Phone</span>
                                <p>+91 95151 04922 / +91 94833 33456</p>
                            </div>
                        </div>

                        <div className="contact__item">
                            <div className="contact__icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <polyline points="22,7 12,13 2,7" />
                                </svg>
                            </div>
                            <div>
                                <span className="contact__label mono">Email</span>
                                <p>info@srisampatti.com</p>
                            </div>
                        </div>

                        <div className="contact__item">
                            <div className="contact__icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <span className="contact__label mono">Address</span>
                                <p>Sy No. 382 (P) Pleasant Hills,<br />Himayatsagar Road (Near ORR, Exit No. 17)<br />Rajendranagar, Hyderabad – 500030, Telangana</p>
                            </div>
                        </div>

                        <div className="contact__social">
                            <span className="contact__label mono">Follow Us</span>
                            <div className="contact__social-icons">
                                {/* Facebook */}
                                <motion.a href="#" className="glass-card contact__social-icon" whileHover={{ borderColor: 'var(--accent)', scale: 1.1 }} aria-label="Facebook">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-secondary)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </motion.a>
                                {/* Instagram */}
                                <motion.a href="#" className="glass-card contact__social-icon" whileHover={{ borderColor: 'var(--accent)', scale: 1.1 }} aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-secondary)"><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><circle cx="12" cy="12" r="5" fill="none" stroke="var(--text-secondary)" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="var(--text-secondary)" /></svg>
                                </motion.a>
                                {/* LinkedIn */}
                                <motion.a href="#" className="glass-card contact__social-icon" whileHover={{ borderColor: 'var(--accent)', scale: 1.1 }} aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-secondary)"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </motion.a>
                                {/* Twitter */}
                                <motion.a href="#" className="glass-card contact__social-icon" whileHover={{ borderColor: 'var(--accent)', scale: 1.1 }} aria-label="Twitter">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-secondary)"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        className="contact__form-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    className="contact__success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="9 12 12 15 16 10" />
                                    </svg>
                                    <h3>Thank you!</h3>
                                    <p>We&apos;ll contact you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <h3>Request a Free Quote</h3>
                                    <p className="contact__form-sub">Share your requirement and our experts will guide you.</p>
                                    <div className="contact__trust">
                                        <span>✓ Free consultation</span>
                                        <span>✓ No spam</span>
                                        <span>✓ Response within 24 hours</span>
                                    </div>

                                    <form className="contact__form" onSubmit={handleSubmit} noValidate>
                                        <div className="contact__field">
                                            <input
                                                type="text" placeholder="Full Name"
                                                className={errors.name ? 'error' : ''}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <AnimatePresence>
                                                {errors.name && <motion.p className="contact__error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{errors.name}</motion.p>}
                                            </AnimatePresence>
                                        </div>

                                        <div className="contact__field">
                                            <PhoneInput
                                                defaultCountry="IN"
                                                value={formData.phone}
                                                onChange={(val) => setFormData({ ...formData, phone: val || '' })}
                                                className={errors.phone ? 'error' : ''}
                                            />
                                            <AnimatePresence>
                                                {errors.phone && <motion.p className="contact__error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{errors.phone}</motion.p>}
                                            </AnimatePresence>
                                        </div>

                                        <div className="contact__field">
                                            <input
                                                type="text" placeholder="Your City / Location"
                                                className={errors.location ? 'error' : ''}
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            />
                                            <AnimatePresence>
                                                {errors.location && <motion.p className="contact__error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{errors.location}</motion.p>}
                                            </AnimatePresence>
                                        </div>

                                        <div className="contact__field">
                                            <textarea
                                                rows="4" placeholder="Describe your requirement..."
                                                className={errors.requirement ? 'error' : ''}
                                                value={formData.requirement}
                                                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                                            />
                                            <AnimatePresence>
                                                {errors.requirement && <motion.p className="contact__error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{errors.requirement}</motion.p>}
                                            </AnimatePresence>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="btn-primary contact__submit"
                                            whileHover={{ y: -1, boxShadow: '0 8px 24px var(--accent-glow)' }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={loading}
                                        >
                                            {loading ? <span className="contact__spinner" /> : 'Submit Request'}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
