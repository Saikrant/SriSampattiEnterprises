import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import { BLOG_POSTS } from '../../data/blogPosts';
import './BlogPreview.css';

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
const preview = BLOG_POSTS.slice(0, 3);

const BlogPreview = () => (
    <section className="bp-prev">
        <div className="container">
            <motion.div className="section-header" {...fadeUp}>
                <span className="pill-label">Insights</span>
                <h2>From Our Blog</h2>
                <p>Tips, guides, and expert advice</p>
            </motion.div>
            <div className="bp-prev__grid">
                {preview.map(post => <BlogCard key={post.id} post={post} />)}
            </div>
            <div className="bp-prev__cta">
                <Link to="/blog">
                    <motion.button className="btn-ghost" whileHover={{ y: -3 }}>Read All Articles →</motion.button>
                </Link>
            </div>
        </div>
    </section>
);

export default BlogPreview;
