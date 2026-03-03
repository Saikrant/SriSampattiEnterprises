import { motion } from 'framer-motion';
import factoryImg from '../../assets/factory.png';
import './Process.css';

const STEPS = [
    { num: '01', title: 'Consultation', desc: 'Free home visit to understand your specific needs and design preferences.' },
    { num: '02', title: 'Measurement', desc: 'Precise laser measurements taken by our expert technical team for a perfect fit.' },
    { num: '03', title: 'Manufacturing', desc: 'Profiles crafted in our facility using German technology and strict quality checks.', active: true },
    { num: '04', title: 'Installation', desc: 'Professional installation ensuring seamless finish, followed by a final quality inspection.' },
];

const Process = () => {
    return (
        <section id="process" className="process">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="pill-label">Seamless Experience</span>
                    <h2>Our Installation Process</h2>
                    <p>Simple, efficient, and hassle-free from start to finish</p>
                </motion.div>

                <div className="process__track">
                    {/* Connecting line */}
                    <svg className="process__line" preserveAspectRatio="none">
                        <line x1="8.33%" y1="50%" x2="91.67%" y2="50%" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                    </svg>

                    {STEPS.map((s, i) => (
                        <div key={i} className="process__step">
                            <motion.div
                                className={`process__num ${s.active ? 'process__num--active' : ''}`}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                                {...(s.active && {
                                    animate: {
                                        boxShadow: [
                                            '0 0 0 4px rgba(200,75,26,0.2)',
                                            '0 0 0 8px rgba(200,75,26,0.0)',
                                            '0 0 0 4px rgba(200,75,26,0.2)',
                                        ],
                                    },
                                    transition: { duration: 2, repeat: Infinity },
                                })}
                            >
                                {s.num}
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                            >
                                {s.title}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                            >
                                {s.desc}
                            </motion.p>
                        </div>
                    ))}
                </div>

                {/* Factory showcase */}
                <motion.div
                    className="process__factory glass-card"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        src={factoryImg}
                        alt="Sri Sampatti Enterprises manufacturing facility in Hyderabad"
                    />
                    <div className="process__factory-caption">
                        <div className="process__factory-info">
                            <h4>Our Manufacturing Facility</h4>
                            <p>
                                State-of-the-art production unit at Rajendranagar, Hyderabad —
                                equipped with German CNC machinery for precision fabrication.
                            </p>
                        </div>
                        <div className="process__factory-stats">
                            <div>
                                <span className="process__factory-stat-num">10,000+</span>
                                <span className="process__factory-stat-label mono">Sq. Ft. Facility</span>
                            </div>
                            <div>
                                <span className="process__factory-stat-num">ISO</span>
                                <span className="process__factory-stat-label mono">Certified</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
