import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import './BlogCard.css';

const BlogCard = ({ post }) => (
    <motion.article
        className="blog-card glass-card"
        whileHover={{ y: -4, borderColor: 'rgba(200,75,26,0.3)' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="blog-card__cover">
            {post.coverImage
                ? <img src={post.coverImage} alt={post.title} />
                : <PlaceholderImage icon="article" text="Article Cover — Coming Soon" aspectRatio="16/9" />
            }
            <span className="blog-card__badge mono">{post.category}</span>
        </div>
        <div className="blog-card__body">
            <span className="blog-card__cat mono">{post.category}</span>
            <h3 className="blog-card__title">{post.title}</h3>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <div className="blog-card__footer">
                <span className="blog-card__date">{post.publishedDate}</span>
                <span className="blog-card__time">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {post.readTime}
                </span>
            </div>
            <Link to={`/blog/${post.slug}`} className="blog-card__link">Read Article →</Link>
        </div>
    </motion.article>
);

export default BlogCard;
