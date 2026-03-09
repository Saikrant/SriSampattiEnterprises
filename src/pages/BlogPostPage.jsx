import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BlogCard from '../components/Blog/BlogCard';
import PlaceholderImage from '../components/PlaceholderImage/PlaceholderImage';
import { BLOG_POSTS } from '../data/blogPosts';
import SEO from '../components/SEO/SEO';
import { getArticleSchema, getBreadcrumbSchema } from '../data/schemas';
import './BlogPostPage.css';

const scrollToSection = (id) => { const el = document.getElementById(id); if (!el) return; window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); };

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) { navigate('/blog'); return; }
        document.title = `${post.title} — Sri Sampatti Enterprises`;
    }, [post, navigate]);

    if (!post) return null;

    const related = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

    const getBlogSEO = (post) => ({
        title: post.title,
        description: post.excerpt,
        keywords: `${post.category} uPVC windows, ${post.title.toLowerCase()}, uPVC guide Hyderabad, Sri Sampatti blog`,
        canonicalUrl: `/blog/${post.slug}`,
        ogType: 'article',
        schema: [
            getArticleSchema(post),
            getBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Blog", url: "/blog" },
                { name: post.title, url: `/blog/${post.slug}` }
            ])
        ]
    });

    return (
        <>
            <SEO {...getBlogSEO(post)} />
            <Navbar />
            <article className="bp-article">
                <div className="bp-container">
                    <Link to="/blog" className="bp-back">← Back to Blog</Link>

                    <motion.header className="bp-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="bp-cat mono">{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className="bp-meta">
                            <span>{post.publishedDate}</span>
                            <span>{post.readTime}</span>
                        </div>
                    </motion.header>

                    <div className="bp-cover">
                        <PlaceholderImage icon="article" text="Article Cover Photo — Coming Soon" aspectRatio="21/9" />
                    </div>

                    <div className="bp-body">
                        {post.content.map((block, i) => {
                            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
                            if (block.type === 'p') return <p key={i}>{block.text}</p>;
                            if (block.type === 'table') return (
                                <div key={i} className="bp-table-wrap">
                                    <table className="bp-table">
                                        <thead><tr>{block.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr></thead>
                                        <tbody>{block.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
                                    </table>
                                </div>
                            );
                            return null;
                        })}
                    </div>

                    <div className="bp-cta glass-card">
                        <h3>Ready to upgrade your windows?</h3>
                        <p>Request a free consultation from our experts.</p>
                        <Link to="/" onClick={(e) => { e.preventDefault(); navigate('/'); setTimeout(() => scrollToSection('contact'), 300); }}>
                            <motion.button className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Get Free Quote</motion.button>
                        </Link>
                    </div>
                </div>

                {related.length > 0 && (
                    <section className="bp-related">
                        <div className="container">
                            <h2 className="bp-related__title">Related Articles</h2>
                            <div className="blog-grid">{related.map(r => <BlogCard key={r.id} post={r} />)}</div>
                        </div>
                    </section>
                )}
            </article>
            <Footer />
        </>
    );
};

export default BlogPostPage;
