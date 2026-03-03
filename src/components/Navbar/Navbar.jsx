import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import BrochureButton from '../BrochureButton/BrochureButton';
import './Navbar.css';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    {
        id: 'company', label: 'Company', dropdown: [
            { label: 'About Us', to: '/about' },
            { label: 'Projects', to: '/projects' },
            { label: 'Service Areas', to: '/service-areas' },
            { label: 'Careers', to: '/careers' },
        ],
    },
    { id: 'features', label: 'Features' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
    {
        id: 'resources', label: 'Resources', dropdown: [
            { label: 'Gallery', to: '/gallery' },
            { label: 'Blog', to: '/blog' },
            { label: 'Partner With Us', to: '/partner-with-us' },
        ],
    },
];

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');
    const [hoveredDropdown, setHoveredDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const [toast, setToast] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Lock body scroll when mobile menu is open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    /* Active section observer */
    useEffect(() => {
        if (!isHome) return;
        const ids = ['home', 'products', 'features', 'process', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { threshold: 0.35, rootMargin: '-80px 0px 0px 0px' }
        );
        ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, [isHome]);

    const handleNav = (id) => {
        setMenuOpen(false);
        setHoveredDropdown(null);
        if (isHome) {
            scrollToSection(id);
        } else {
            navigate('/');
            setTimeout(() => scrollToSection(id), 300);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <a className="navbar__logo" href="/" onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
                {/* Window grid icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="var(--accent)" strokeWidth="2" />
                    <line x1="12" y1="2" x2="12" y2="22" stroke="var(--accent)" strokeWidth="1.5" />
                    <line x1="2" y1="12" x2="22" y2="12" stroke="var(--accent)" strokeWidth="1.5" />
                </svg>
                <div className="navbar__brand">
                    <span className="navbar__brand-name">Sri Sampatti</span>
                    <span className="navbar__brand-sub mono">ENTERPRISES</span>
                </div>
            </a>

            {/* Desktop nav */}
            <ul className="navbar__links">
                {NAV_ITEMS.map((item) => (
                    <li
                        key={item.id}
                        className={item.dropdown ? 'navbar__dropdown-wrap' : ''}
                        onMouseEnter={() => item.dropdown && setHoveredDropdown(item.id)}
                        onMouseLeave={() => item.dropdown && setHoveredDropdown(null)}
                    >
                        <a
                            className={`navbar__link ${active === item.id && isHome && !item.dropdown ? 'navbar__link--active' : ''}`}
                            href={item.dropdown ? '#' : `#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!item.dropdown) handleNav(item.id);
                            }}
                        >
                            {item.label}
                            {item.dropdown && (
                                <svg className="navbar__chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                            )}
                        </a>

                        {/* Dropdown */}
                        <AnimatePresence>
                            {item.dropdown && hoveredDropdown === item.id && (
                                <motion.div
                                    className="navbar__dropdown"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.dropdown.map((sub) => (
                                        sub.to === '/careers' ? (
                                            <a key={sub.label} href="#" className="navbar__dropdown-item" onClick={(e) => {
                                                e.preventDefault();
                                                setToast(true);
                                                setTimeout(() => setToast(false), 3000);
                                                setHoveredDropdown(null);
                                            }}>
                                                {sub.label}
                                            </a>
                                        ) : (
                                            <Link key={sub.to} to={sub.to} className="navbar__dropdown-item" onClick={() => setHoveredDropdown(null)}>
                                                {sub.label}
                                            </Link>
                                        )
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>

            <div className="navbar__actions">
                <BrochureButton />
                <motion.button
                    className="btn-primary navbar__cta"
                    whileHover={{ scale: 1.04, backgroundColor: 'var(--accent-light)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNav('contact')}
                >
                    Get Quote
                </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
                className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                    >
                        <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                        >
                            {/* Section links */}
                            {['Home', 'Products', 'Features', 'Process', 'Contact'].map((label) => (
                                <motion.li key={label} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                                    <a href={`#${label.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNav(label.toLowerCase()); }}>{label}</a>
                                </motion.li>
                            ))}

                            {/* Company section */}
                            <motion.li className="navbar__mobile-label" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>Company</motion.li>
                            {[{ label: 'About Us', to: '/about' }, { label: 'Projects', to: '/projects' }, { label: 'Service Areas', to: '/service-areas' }, { label: 'Careers', to: '/careers' }].map(item => (
                                <motion.li key={item.to} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                                    {item.to === '/careers' ? (
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault();
                                            setToast(true);
                                            setTimeout(() => setToast(false), 3000);
                                        }}>{item.label}</a>
                                    ) : (
                                        <Link to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                                    )}
                                </motion.li>
                            ))}

                            {/* Resources section */}
                            <motion.li className="navbar__mobile-label" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>Resources</motion.li>
                            {[{ label: 'Gallery', to: '/gallery' }, { label: 'Blog', to: '/blog' }, { label: 'Partner With Us', to: '/partner-with-us' }].map(item => (
                                <motion.li key={item.to} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}>
                                    <Link to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <button className="btn-primary navbar__mobile-cta" onClick={() => handleNav('contact')}>
                            Get Quote
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Coming Soon Toast */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        className="navbar__toast glass-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Careers page is coming soon!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
