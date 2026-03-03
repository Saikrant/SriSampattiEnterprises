import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import heroVilla from '../../assets/hero-villa.png';
import './Hero.css';

/* CountUp hook */
const useCountUp = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = performance.now();
                    const step = (now) => {
                        const t = Math.min((now - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - t, 4);
                        setCount(Math.floor(ease * target));
                        if (t < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
};

const Hero = () => {
    const stat1 = useCountUp(15);
    const stat2 = useCountUp(500);
    const stat3 = useCountUp(6);

    return (
        <section id="home" className="hero">
            {/* Fullscreen background image */}
            <div className="hero__bg" style={{ backgroundImage: `url(${heroVilla})` }} />

            {/* BG pattern */}
            <div className="hero__pattern" />

            <motion.div
                className="hero__content container"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Text content overlaying background */}
                <div className="hero__left">
                    <motion.div className="hero__badge-inline glass-card" variants={fadeUp}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Sudhakar Profiles</span>
                    </motion.div>

                    <motion.h1 className="hero__title" variants={fadeUp}>
                        Engineered for<br />
                        <span className="hero__title-white">Indian </span>
                        <span className="hero__title-accent">Living.</span>
                    </motion.h1>

                    <motion.p className="hero__sub" variants={fadeUp}>
                        Premium uPVC windows &amp; doors with German technology.
                        Serving Telangana, Andhra Pradesh &amp; Karnataka.
                    </motion.p>

                    <motion.blockquote className="hero__quote" variants={fadeUp}>
                        Premium uPVC solutions for villas, apartments, and commercial
                        buildings across Telangana, AP &amp; Karnataka.
                    </motion.blockquote>

                    <motion.div className="hero__cta" variants={fadeUp}>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ y: -3, boxShadow: '0 12px 28px var(--accent-glow)' }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollToSection('contact')}
                        >
                            Request Free Quote
                        </motion.button>
                        <motion.button
                            className="btn-ghost"
                            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.25)' }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollToSection('products')}
                        >
                            Explore Products
                        </motion.button>
                    </motion.div>

                    {/* Stats — visible on mobile as compact bar */}
                    <motion.div className="hero__stats" variants={fadeUp}>
                        <div className="hero__stat" ref={stat1.ref}>
                            <span className="hero__stat-num">{stat1.count}+</span>
                            <span className="hero__stat-label mono">Years of Trust</span>
                        </div>
                        <div className="hero__stat" ref={stat2.ref}>
                            <span className="hero__stat-num">{stat2.count}+</span>
                            <span className="hero__stat-label mono">Projects Completed</span>
                        </div>
                        <div className="hero__stat" ref={stat3.ref}>
                            <span className="hero__stat-num">{stat3.count}</span>
                            <span className="hero__stat-label mono">Product Lines</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator — desktop only */}
            <div className="hero__scroll">
                <span className="mono">SCROLL TO EXPLORE</span>
                <motion.svg
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <polyline points="6 9 12 15 18 9" />
                </motion.svg>
            </div>
        </section>
    );
};

export default Hero;
