import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage';
import { GALLERY_ITEMS } from '../data/galleryItems';
import './GalleryPage.css';

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const GalleryPage = () => {
    const [typeFilter, setTypeFilter] = useState('All');
    const [catFilter, setCatFilter] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    useEffect(() => { document.title = 'Gallery — Sri Sampatti Enterprises'; }, []);

    const photos = GALLERY_ITEMS.filter(i => i.type === 'photo');
    const videos = GALLERY_ITEMS.filter(i => i.type === 'video');
    const categories = ['All', ...new Set(photos.map(p => p.category))];

    const visiblePhotos = catFilter === 'All' ? photos : photos.filter(p => p.category === catFilter);
    const showPhotos = typeFilter === 'All' || typeFilter === 'Photos';
    const showVideos = typeFilter === 'All' || typeFilter === 'Videos';

    const lbItems = visiblePhotos;
    const lbIdx = lightbox !== null ? lbItems.findIndex(i => i.id === lightbox) : -1;
    const lbPrev = () => { if (lbIdx > 0) setLightbox(lbItems[lbIdx - 1].id); };
    const lbNext = () => { if (lbIdx < lbItems.length - 1) setLightbox(lbItems[lbIdx + 1].id); };
    const lbItem = lbIdx >= 0 ? lbItems[lbIdx] : null;

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); if (e.key === 'ArrowLeft') lbPrev(); if (e.key === 'ArrowRight') lbNext(); };
        if (lightbox !== null) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    });

    return (
        <>
            <Navbar />
            <section className="gal-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Gallery</span>
                        <h1>Our Work in Pictures</h1>
                        <p className="gal-hero__sub">A glimpse into installations, products, and our factory</p>
                    </motion.div>
                </div>
            </section>

            <section className="gal-content">
                <div className="container">
                    <div className="gal-filters">
                        {['All', 'Photos', 'Videos'].map(t => (
                            <button key={t} className={`proj-filter ${typeFilter === t ? 'proj-filter--active' : ''}`} onClick={() => { setTypeFilter(t); setCatFilter('All'); }}>{t}</button>
                        ))}
                    </div>
                    {(typeFilter === 'All' || typeFilter === 'Photos') && (
                        <div className="gal-filters gal-filters--sub">
                            {categories.map(c => (
                                <button key={c} className={`proj-filter ${catFilter === c ? 'proj-filter--active' : ''}`} onClick={() => setCatFilter(c)}>{c}</button>
                            ))}
                        </div>
                    )}

                    {showPhotos && (
                        <div className="gal-masonry">
                            {visiblePhotos.map((item, i) => (
                                <motion.div key={item.id} className="gal-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} onClick={() => setLightbox(item.id)} whileHover={{ scale: 1.02 }}>
                                    {item.src ? <img src={item.src} alt={item.alt} /> : <PlaceholderImage icon="photo" text="Photo Coming Soon" subtext={item.category} aspectRatio={i % 3 === 0 ? '1/1' : '4/3'} />}
                                    <div className="gal-item__overlay">
                                        <span className="gal-item__cat mono">{item.category}</span>
                                        <span className="gal-item__alt">{item.alt}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {showVideos && (
                        <>
                            {typeFilter === 'All' && <h3 className="gal-section-title">Videos</h3>}
                            <div className="gal-videos">
                                {videos.map((v, i) => (
                                    <motion.div key={v.id} className="gal-video glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ borderColor: 'var(--accent)' }}>
                                        <div className="gal-video__thumb">
                                            <PlaceholderImage icon="video" text="Video Coming Soon" aspectRatio="16/9" />
                                            <div className="gal-video__play">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21" /></svg>
                                            </div>
                                        </div>
                                        <div className="gal-video__info">
                                            <span className="gal-video__title">{v.alt}</span>
                                            <span className="gal-video__dur mono">{v.duration}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lbItem && (
                    <motion.div className="gal-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)}>
                        <button className="gal-lightbox__close" onClick={() => setLightbox(null)}>×</button>
                        {lbIdx > 0 && <button className="gal-lightbox__nav gal-lightbox__nav--prev" onClick={e => { e.stopPropagation(); lbPrev(); }}>‹</button>}
                        {lbIdx < lbItems.length - 1 && <button className="gal-lightbox__nav gal-lightbox__nav--next" onClick={e => { e.stopPropagation(); lbNext(); }}>›</button>}
                        <motion.div className="gal-lightbox__content" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={e => e.stopPropagation()}>
                            <PlaceholderImage icon="photo" text="Full-size Photo Coming Soon" subtext={lbItem.alt} aspectRatio="16/10" className="gal-lightbox__img" />
                            <p className="gal-lightbox__caption">{lbItem.alt}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
};

export default GalleryPage;
