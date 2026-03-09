import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BlogCard from '../components/Blog/BlogCard';
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage';
import { BLOG_POSTS } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import './BlogListPage.css';

const CATS = ['All', 'Buying Guide', 'Tips & Care', 'Product Focus', 'Industry News'];
const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const BlogListPage = () => {
    const [cat, setCat] = useState('All');
    useEffect(() => { document.title = 'Blog — Sri Sampatti Enterprises'; }, []);

    const filtered = cat === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === cat);
    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <>
            <SEO
                title="uPVC Windows & Doors Guide — Tips & Insights | Sri Sampatti"
                description="Expert tips, buying guides, and industry insights on uPVC windows and doors for Indian homes. From Hyderabad's leading uPVC manufacturer."
                keywords="uPVC windows guide India, uPVC buying guide Hyderabad, uPVC vs aluminium windows India, best windows for Indian homes"
                canonicalUrl="/blog"
            />
            <Navbar />
            <section className="blog-hero">
                <div className="container">
                    <motion.div {...fadeUp}>
                        <span className="pill-label">Insights</span>
                        <h1>Tips, Guides & Industry News</h1>
                        <p className="blog-hero__sub">Expert advice on windows, doors, and home improvement</p>
                    </motion.div>
                </div>
            </section>

            <section className="blog-content">
                <div className="container">
                    <div className="gal-filters">
                        {CATS.map(c => (
                            <button key={c} className={`proj-filter ${cat === c ? 'proj-filter--active' : ''}`} onClick={() => setCat(c)}>{c}</button>
                        ))}
                    </div>

                    {featured && (
                        <motion.div className="blog-featured glass-card" {...fadeUp}>
                            <div className="blog-featured__img">
                                <PlaceholderImage icon="article" text="Featured Article Cover" subtext={featured.category} aspectRatio="16/9" />
                            </div>
                            <div className="blog-featured__body">
                                <span className="blog-card__cat mono">{featured.category}</span>
                                <h2>{featured.title}</h2>
                                <p>{featured.excerpt}</p>
                                <div className="blog-featured__meta">
                                    <span>{featured.publishedDate}</span>
                                    <span>{featured.readTime}</span>
                                </div>
                                <Link to={`/blog/${featured.slug}`} className="blog-card__link">Read Article →</Link>
                            </div>
                        </motion.div>
                    )}

                    <div className="blog-grid">
                        {rest.map(post => <BlogCard key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogListPage;
