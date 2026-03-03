import { motion } from 'framer-motion';
import './QualityPartners.css';

const PARTNERS = [
    { name: 'Sudhakar Profiles', highlight: true },
    { name: 'Partner Brand 2' },
    { name: 'Partner Brand 3' },
    { name: 'Partner Brand 4' },
    { name: 'Partner Brand 5' },
];

const CLIENTS = [
    'Builder Logo 1', 'Builder Logo 2', 'Builder Logo 3',
    'Builder Logo 4', 'Builder Logo 5', 'Builder Logo 6',
];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const QualityPartners = () => (
    <section className="qp" id="partners">
        <div className="container">
            {/* Quality Partners */}
            <motion.div className="section-header" {...fadeUp}>
                <span className="pill-label">Quality Partners</span>
                <p className="qp__sub">We work with industry-leading brands to bring you the best in uPVC systems</p>
            </motion.div>
            <div className="qp__row">
                {PARTNERS.map((p, i) => (
                    <motion.div key={i} className={`glass-card qp__logo ${p.highlight ? 'qp__logo--highlight' : ''}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.05 }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={p.highlight ? 'var(--accent)' : 'var(--text-muted)'} strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="4" /><line x1="7" y1="8" x2="17" y2="8" /><line x1="7" y1="12" x2="14" y2="12" /><line x1="7" y1="16" x2="11" y2="16" /></svg>
                        <span>{p.name}</span>
                    </motion.div>
                ))}
            </div>
            <p className="qp__note">(Partner logos to be added)</p>

            {/* Trusted By */}
            <motion.div className="section-header qp__trusted" {...fadeUp}>
                <span className="pill-label">Trusted By</span>
                <p className="qp__sub">Builders, housing societies, and commercial clients across South India</p>
            </motion.div>
            <div className="qp__row">
                {CLIENTS.map((c, i) => (
                    <motion.div key={i} className="glass-card qp__logo" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.05 }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><path d="M9 22v-4h6v4" /></svg>
                        <span>{c}</span>
                    </motion.div>
                ))}
            </div>
            <p className="qp__note">(Client logos to be added)</p>
        </div>
    </section>
);

export default QualityPartners;
