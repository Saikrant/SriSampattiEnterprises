import { useNavigate, Link } from 'react-router-dom';
import './Footer.css';

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
};

const SECTION_LINKS = ['Home', 'Products', 'Features', 'Process', 'Testimonials'];
const PAGE_LINKS = [
    { label: 'About Us', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Blog', to: '/blog' },
    { label: 'Partner With Us', to: '/partner-with-us' },
];

const Footer = () => {
    const navigate = useNavigate();

    const handleLink = (label) => {
        const id = label.toLowerCase();
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToSection(id === 'home' ? 'home' : id), 300);
        } else {
            scrollToSection(id === 'home' ? 'home' : id);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a className="footer__logo" href="/" onClick={(e) => { e.preventDefault(); handleLink('Home'); }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="2" stroke="var(--accent)" strokeWidth="2" />
                                <line x1="12" y1="2" x2="12" y2="22" stroke="var(--accent)" strokeWidth="1.5" />
                                <line x1="2" y1="12" x2="22" y2="12" stroke="var(--accent)" strokeWidth="1.5" />
                            </svg>
                            <div>
                                <span className="footer__brand-name">Sri Sampatti</span>
                                <span className="footer__brand-sub mono">ENTERPRISES</span>
                            </div>
                        </a>
                        <p className="footer__tagline">
                            Crafting excellence since 1998. Premium uPVC windows
                            and doors tailored for modern homes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <span className="footer__heading mono">Quick Links</span>
                        <div className="footer__heading-line" />
                        <ul>
                            {SECTION_LINKS.map((l) => (
                                <li key={l}>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleLink(l); }}>{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <span className="footer__heading mono">Company</span>
                        <div className="footer__heading-line" />
                        <ul>
                            {PAGE_LINKS.map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to}>{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <span className="footer__heading mono">Factory Address</span>
                        <div className="footer__heading-line" />
                        <p className="footer__address">
                            Sy No. 382 (P) Pleasant Hills,<br />
                            Himayatsagar Road (Near ORR, Exit No. 17)<br />
                            Rajendranagar, Hyderabad 500030, Telangana
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <span className="footer__heading mono">Contact Us</span>
                        <div className="footer__heading-line" />
                        <div className="footer__contact-items">
                            <div className="footer__contact-row">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 95151 04922</span>
                            </div>
                            <div className="footer__contact-row">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 94833 33456</span>
                            </div>
                            <div className="footer__contact-row">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <polyline points="22,7 12,13 2,7" />
                                </svg>
                                <span>info@srisampatti.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <span>© 2026 Sri Sampatti Enterprises Pvt Ltd. All rights reserved.</span>
                    <span>Powered by Sudhakar Profiles</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
