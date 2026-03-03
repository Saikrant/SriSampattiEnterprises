import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import { PROJECTS } from '../../data/projects';
import './ProjectsPreview.css';

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
const preview = PROJECTS.slice(0, 3);

const ProjectsPreview = () => (
    <section className="pp">
        <div className="container">
            <motion.div className="section-header" {...fadeUp}>
                <span className="pill-label">Our Work</span>
                <h2>Recent Projects</h2>
                <p>A selection of our recent installations</p>
            </motion.div>
            <div className="pp__grid">
                {preview.map((p, i) => (
                    <motion.div key={p.id} className="pp__card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
                        <div className="pp__img">
                            <PlaceholderImage icon="building" text="Project Photo — Coming Soon" subtext={p.title} aspectRatio="4/3" />
                        </div>
                        <div className="pp__body">
                            <span className="pp__badge mono">{p.type}</span>
                            <h3>{p.title}</h3>
                            <span className="pp__loc">{p.location}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="pp__cta">
                <Link to="/projects">
                    <motion.button className="btn-ghost" whileHover={{ y: -3 }}>View All Projects →</motion.button>
                </Link>
            </div>
        </div>
    </section>
);

export default ProjectsPreview;
