import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ColorProfiles.css';

const COLORS = [
    { id: 1, name: 'Golden Oak', hex: '#c8922a', frame: '#c8922a', frameDark: '#9e7220', glass: 'rgba(160, 210, 240, 0.18)' },
    { id: 2, name: 'Dark Oak', hex: '#3d2314', frame: '#4a2c1a', frameDark: '#2e1a0f', glass: 'rgba(160, 210, 240, 0.12)' },
    { id: 3, name: 'Walnut', hex: '#8b6355', frame: '#8b6355', frameDark: '#6b4a3e', glass: 'rgba(160, 210, 240, 0.15)' },
    { id: 4, name: 'Mahogany', hex: '#8b2e1a', frame: '#8b2e1a', frameDark: '#6a2214', glass: 'rgba(160, 210, 240, 0.14)' },
    { id: 5, name: 'Anthracite Grey', hex: '#3a3f4a', frame: '#4a4f5a', frameDark: '#2e3340', glass: 'rgba(160, 210, 240, 0.20)' },
    { id: 6, name: 'Jet Black', hex: '#1a1a1a', frame: '#222222', frameDark: '#111111', glass: 'rgba(160, 210, 240, 0.22)' },
    { id: 7, name: 'Pure White', hex: '#f0f0f0', frame: '#f0ece4', frameDark: '#d8d4cc', glass: 'rgba(160, 210, 240, 0.25)' },
];

/* ---------- SVG: Sliding Window ---------- */
const SlidingWindowSVG = ({ frame, frameDark, glass }) => (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="colors__svg">
        {/* Outer frame */}
        <rect x="10" y="10" width="380" height="300" rx="6" fill={frame} stroke={frameDark} strokeWidth="2" />
        {/* Inner recess */}
        <rect x="24" y="24" width="352" height="272" rx="3" fill={frameDark} />
        {/* Left glass pane */}
        <rect x="30" y="30" width="166" height="260" rx="2" fill={glass} />
        {/* Right glass pane (slides over left) */}
        <rect x="204" y="30" width="166" height="260" rx="2" fill={glass} />
        {/* Left pane frame border */}
        <rect x="30" y="30" width="166" height="260" rx="2" stroke={frame} strokeWidth="6" fill="none" />
        {/* Right pane frame border */}
        <rect x="204" y="30" width="166" height="260" rx="2" stroke={frame} strokeWidth="6" fill="none" />
        {/* Left pane horizontal mullion */}
        <line x1="33" y1="160" x2="193" y2="160" stroke={frame} strokeWidth="5" />
        {/* Right pane horizontal mullion */}
        <line x1="207" y1="160" x2="367" y2="160" stroke={frame} strokeWidth="5" />
        {/* Center vertical divider */}
        <rect x="194" y="24" width="14" height="272" fill={frame} />
        <line x1="201" y1="24" x2="201" y2="296" stroke={frameDark} strokeWidth="1" />
        {/* Handle on right pane */}
        <rect x="212" y="152" width="4" height="18" rx="2" fill={frameDark} />
        {/* Glass reflections — left */}
        <line x1="50" y1="50" x2="80" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="60" y1="50" x2="90" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Glass reflections — right */}
        <line x1="224" y1="50" x2="254" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="234" y1="50" x2="264" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Outer frame bevel highlight */}
        <line x1="12" y1="12" x2="388" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="12" y1="12" x2="12" y2="308" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Shadow line at bottom */}
        <line x1="12" y1="308" x2="388" y2="308" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
    </svg>
);

/* ---------- SVG: Casement Window ---------- */
const CasementWindowSVG = ({ frame, frameDark, glass }) => (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="colors__svg">
        {/* Outer frame */}
        <rect x="10" y="10" width="380" height="300" rx="6" fill={frame} stroke={frameDark} strokeWidth="2" />
        {/* Inner recess */}
        <rect x="26" y="26" width="348" height="268" rx="3" fill={frameDark} />
        {/* Left glass pane */}
        <rect x="32" y="32" width="163" height="256" rx="2" fill={glass} />
        {/* Right glass pane */}
        <rect x="205" y="32" width="163" height="256" rx="2" fill={glass} />
        {/* Left pane sash frame */}
        <rect x="32" y="32" width="163" height="256" rx="2" stroke={frame} strokeWidth="8" fill="none" />
        {/* Right pane sash frame */}
        <rect x="205" y="32" width="163" height="256" rx="2" stroke={frame} strokeWidth="8" fill="none" />
        {/* Center vertical mullion */}
        <rect x="193" y="26" width="14" height="268" fill={frame} />
        <line x1="200" y1="26" x2="200" y2="294" stroke={frameDark} strokeWidth="1" />
        {/* Left casement handle */}
        <rect x="184" y="152" width="4" height="20" rx="2" fill={frameDark} />
        {/* Right casement handle */}
        <rect x="212" y="152" width="4" height="20" rx="2" fill={frameDark} />
        {/* Left pane - top transom (decorative cross-bar) */}
        <line x1="36" y1="110" x2="191" y2="110" stroke={frame} strokeWidth="5" />
        {/* Right pane - top transom */}
        <line x1="209" y1="110" x2="364" y2="110" stroke={frame} strokeWidth="5" />
        {/* Glass reflections — left */}
        <line x1="55" y1="48" x2="85" y2="78" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="65" y1="48" x2="95" y2="78" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Glass reflections — right */}
        <line x1="228" y1="48" x2="258" y2="78" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="238" y1="48" x2="268" y2="78" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Hinge marks — left side */}
        <circle cx="38" cy="80" r="3" fill={frameDark} />
        <circle cx="38" cy="240" r="3" fill={frameDark} />
        {/* Hinge marks — right side */}
        <circle cx="362" cy="80" r="3" fill={frameDark} />
        <circle cx="362" cy="240" r="3" fill={frameDark} />
        {/* Outer bevel highlight */}
        <line x1="12" y1="12" x2="388" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="12" y1="12" x2="12" y2="308" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Shadow */}
        <line x1="12" y1="308" x2="388" y2="308" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
    </svg>
);

/* ---------- SVG: Door ---------- */
const DoorSVG = ({ frame, frameDark, glass }) => (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="colors__svg colors__svg--door">
        {/* Outer frame */}
        <rect x="10" y="10" width="280" height="380" rx="6" fill={frame} stroke={frameDark} strokeWidth="2" />
        {/* Inner recess */}
        <rect x="26" y="26" width="248" height="348" rx="3" fill={frameDark} />
        {/* Top glass panel */}
        <rect x="34" y="34" width="232" height="160" rx="2" fill={glass} />
        <rect x="34" y="34" width="232" height="160" rx="2" stroke={frame} strokeWidth="8" fill="none" />
        {/* Glass vertical divider */}
        <line x1="150" y1="38" x2="150" y2="190" stroke={frame} strokeWidth="5" />
        {/* Bottom solid panel */}
        <rect x="34" y="204" width="232" height="162" rx="2" fill={frame} />
        <rect x="34" y="204" width="232" height="162" rx="2" stroke={frameDark} strokeWidth="1" fill="none" />
        {/* Panel decorative recess */}
        <rect x="50" y="220" width="200" height="130" rx="3" stroke={frameDark} strokeWidth="2" fill="none" />
        {/* Door handle */}
        <rect x="230" y="230" width="6" height="40" rx="3" fill={frameDark} />
        <circle cx="233" cy="280" r="4" fill={frameDark} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Hinge marks */}
        <circle cx="40" cy="80" r="3" fill={frameDark} />
        <circle cx="40" cy="300" r="3" fill={frameDark} />
        {/* Glass reflections */}
        <line x1="55" y1="50" x2="85" y2="80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="65" y1="50" x2="95" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Bevel highlights */}
        <line x1="12" y1="12" x2="288" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="12" y1="12" x2="12" y2="388" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="12" y1="388" x2="288" y2="388" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />
    </svg>
);

const PRODUCT_TYPES = [
    { id: 'sliding', name: 'Sliding Window', Component: SlidingWindowSVG },
    { id: 'casement', name: 'Casement Window', Component: CasementWindowSVG },
    { id: 'door', name: 'French Door', Component: DoorSVG },
];

const ColorProfiles = () => {
    const [selected, setSelected] = useState(COLORS[0]);
    const [activeProduct, setActiveProduct] = useState(PRODUCT_TYPES[0]);

    const ActiveSVG = activeProduct.Component;

    return (
        <section id="colors" className="colors">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="pill-label">Finish Options</span>
                    <h2>Color Profile Options</h2>
                    <p>Premium German laminates in authentic wood textures and modern solids</p>
                </motion.div>

                <div className="colors__grid">
                    {/* SVG Preview */}
                    <motion.div
                        className="colors__preview"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Product type tabs */}
                        <div className="colors__product-tabs">
                            {PRODUCT_TYPES.map((p) => (
                                <button
                                    key={p.id}
                                    className={`colors__product-tab ${activeProduct.id === p.id ? 'colors__product-tab--active' : ''}`}
                                    onClick={() => setActiveProduct(p)}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>

                        <div className="colors__product-frame glass-card">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProduct.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ActiveSVG
                                        frame={selected.frame}
                                        frameDark={selected.frameDark}
                                        glass={selected.glass}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="colors__selected-label">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={`${selected.id}-${activeProduct.id}`}
                                    className="mono"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {activeProduct.name} · <span style={{ color: selected.hex }}>{selected.name}</span>
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Swatch grid */}
                    <motion.div
                        className="colors__swatches"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="swatch-grid">
                            {COLORS.map((c) => (
                                <motion.div
                                    key={c.id}
                                    className={`swatch ${selected.id === c.id ? 'swatch--active' : ''}`}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setSelected(c)}
                                >
                                    <div className="swatch__color" style={{ background: c.hex }} />
                                    <div className="swatch__label">{c.name}</div>

                                    <AnimatePresence>
                                        {selected.id === c.id && (
                                            <motion.div
                                                className="swatch__check"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        <div className="glass-card colors__note">
                            <p>
                                <strong>Note:</strong> Laminations available in single or double-sided combinations.
                                UV resistant and tested for extreme Indian climatic conditions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ColorProfiles;
