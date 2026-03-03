import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Testimonials.css';

const TESTIMONIALS = [
    { quote: 'The uPVC windows have completely transformed our home. No more noise from the highway and our electricity bills have gone down significantly. Excellent quality!', name: 'Rajesh Kumar', location: 'Banjara Hills, Hyderabad' },
    { quote: 'Professional team, precise measurements and flawless installation. The German quality is evident in every detail. Worth every rupee invested.', name: 'Priya Mehta', location: 'Gachibowli, Hyderabad' },
    { quote: 'Got French doors installed for my terrace. The finish is immaculate and the locking system is very secure. Highly recommend Sri Sampatti!', name: 'Suresh Reddy', location: 'Jubilee Hills, Hyderabad' },
    { quote: 'Sliding windows in all 3 bedrooms. The smooth operation and weather sealing is outstanding. No water seepage even during heavy rains.', name: 'Anitha Bose', location: 'Kondapur, Hyderabad' },
    { quote: 'Quick response, on-time delivery and the installation was done neatly in one day. Very happy with the overall experience.', name: 'Venkat Srinivas', location: 'Miyapur, Hyderabad' },
];

const initials = (name) => name.split(' ').map((w) => w[0]).join('');

const Testimonials = () => {
    const controls = useAnimation();
    const trackRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!paused) {
            controls.start({ x: [0, '-50%'], transition: { duration: 30, repeat: Infinity, ease: 'linear' } });
        } else {
            controls.stop();
        }
    }, [paused, controls]);

    const cards = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ marginBottom: 56 }}
                >
                    <h2>What Our Customers Say</h2>
                    <p>Don&apos;t just take our word for it</p>
                </motion.div>
            </div>

            <div
                className="testimonials__wrapper"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <motion.div className="testimonials__track" ref={trackRef} animate={controls}>
                    {cards.map((t, i) => (
                        <div key={i} className="testimonial-card glass-card">
                            <div className="testimonial-card__stars">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                                    </svg>
                                ))}
                            </div>
                            <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                            <div className="testimonial-card__customer">
                                <div className="testimonial-card__avatar">{initials(t.name)}</div>
                                <div>
                                    <span className="testimonial-card__name">{t.name}</span>
                                    <span className="testimonial-card__loc">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
