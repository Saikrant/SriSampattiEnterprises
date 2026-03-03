import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BottomTabBar.css';

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
};

const TABS = [
    {
        id: 'home', label: 'Home', to: '/', section: 'home',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        id: 'products', label: 'Products', to: '/', section: 'products',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" /><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
            </svg>
        ),
    },
    {
        id: 'projects', label: 'Projects', to: '/projects',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><path d="M9 22v-4h6v4" />
            </svg>
        ),
    },
    {
        id: 'blog', label: 'Blog', to: '/blog',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
            </svg>
        ),
    },
    {
        id: 'contact', label: 'Contact', to: '/', section: 'contact',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
];

const BottomTabBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getActive = () => {
        if (location.pathname === '/projects') return 'projects';
        if (location.pathname.startsWith('/blog')) return 'blog';
        return null; // Home sections handled by scroll
    };

    const activeTab = getActive();

    const handleTab = (tab) => {
        if (tab.section) {
            // It's a homepage section scroll
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => scrollToSection(tab.section), 300);
            } else {
                scrollToSection(tab.section);
            }
        } else {
            // It's a separate page route
            navigate(tab.to);
        }
    };

    return (
        <nav className="bottom-tab-bar">
            {TABS.map((tab) => {
                const isActive = activeTab === tab.id || (location.pathname === '/' && !activeTab && tab.id === 'home');
                return (
                    <motion.button
                        key={tab.id}
                        className={`bottom-tab ${isActive ? 'bottom-tab--active' : ''}`}
                        onClick={() => handleTab(tab)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="bottom-tab__icon">{tab.icon}</span>
                        <span className="bottom-tab__label">{tab.label}</span>
                    </motion.button>
                );
            })}
        </nav>
    );
};

export default BottomTabBar;
