import React, { useRef, useState } from 'react';

import casementImage from '../assets/product-casement.png';
import slidingImage from '../assets/product-sliding.png';
import french from '../assets/french doors.png';
import tiltturn from '../assets/tilt-and-turn-window.png';
import fixedwindow from '../assets/fixed windows.jpeg';
import liftandslide from '../assets/lift and slide doors.jpg';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const sliderRef = useRef(null);

    const products = [
        {
            title: "Sliding Systems",
            description: "Heavy duty systems for wide openings in homes, villas, and high-rise buildings.",
            features: [
                "✓ 2T, 2.5T & 3T options",
                "✓ Bug mesh shutter available",
                "✓ Aluminum smooth track",
                "✓ Prima, Eco & Royal Series"
            ],
            image: slidingImage,
            detailedInfo: {
                specifications: [
                    "Glass thickness: 5mm–24mm",
                    "Low threshold option",
                    "Integrated mosquito mesh"
                ]
            }
        },
        {
            title: "Casement Windows",
            description: "Premium inward & outward opening windows with excellent sealing and insulation.",
            features: [
                "✓ 90° sash opening",
                "✓ Multipoint locking",
                "✓ Double weather seal",
                "✓ High wind resistance"
            ],
            image: casementImage,
            detailedInfo: {
                specifications: [
                    "Glass thickness: 5mm–38mm",
                    "Euro groove hardware",
                    "Steel reinforcement"
                ]
            }
        },
        {
            title: "Tilt & Turn Windows",
            description: "Dual-function windows offering tilt ventilation and full opening.",
            features: [
                "✓ Tilt ventilation",
                "✓ Full turn opening",
                "✓ European hardware",
                "✓ High security locks"
            ],
            image: tiltturn,
            detailedInfo: {
                specifications: [
                    "Multi-locking points",
                    "Heavy duty hinges",
                    "Double glazing support"
                ]
            }
        },
        {
            title: "Fixed Windows",
            description: "Non-operable windows designed for maximum light and modern aesthetics.",
            features: [
                "✓ Maximum glass area",
                "✓ Minimal frame design",
                "✓ Low maintenance",
                "✓ Cost effective"
            ],
            image: fixedwindow,
            detailedInfo: {
                specifications: [
                    "Single & double glazing",
                    "UV resistant profiles",
                    "Custom sizes available"
                ]
            }
        },
        {
            title: "French Doors",
            description: "Elegant double door systems offering wide openings and premium appearance.",
            features: [
                "✓ Wide opening design",
                "✓ Multipoint locking",
                "✓ Heavy duty hinges",
                "✓ Premium handles"
            ],
            image: french,
            detailedInfo: {
                specifications: [
                    "Toughened glass support",
                    "High wind load resistance",
                    "Custom color options"
                ]
            }
        },
        {
            title: "Lift & Slide Doors",
            description: "Advanced sliding systems for very large openings with effortless movement.",
            features: [
                "✓ Lift mechanism",
                "✓ Extra-large shutters",
                "✓ Premium rollers",
                "✓ Noise-free sliding"
            ],
            image: liftandslide,
            detailedInfo: {
                specifications: [
                    "Glass thickness up to 42mm",
                    "High load bearing rollers",
                    "Low threshold option"
                ]
            }
        }
    ];

    const scrollSlider = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === 'right' ? 380 : -380,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <section id="products" className="products">
                <div className="container">

                    <div className="section-header">
                        <span className="section-badge">Our Product Range</span>
                        <h2>Premium uPVC Systems</h2>
                        <p>Powered by high-quality Sudhakar Profiles</p>
                    </div>

                    <div className="products-slider-header">
                        <button className="slider-btn" onClick={() => scrollSlider('left')}>‹</button>
                        <button className="slider-btn" onClick={() => scrollSlider('right')}>›</button>
                    </div>

                    <div className="products-slider" ref={sliderRef}>
                        {products.map((product, i) => (
                            <div key={i} className="product-card slider-card">

                                {/* IMAGE AS BACKGROUND */}
                                <div
                                    className="product-image"
                                    style={{
                                        backgroundImage: `url(${product.image})`
                                    }}
                                />

                                <div className="product-content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>

                                    <ul className="product-features">
                                        {product.features.map((f, idx) => (
                                            <li key={idx}>{f}</li>
                                        ))}
                                    </ul>

                                    <button
                                        className="btn btn-primary btn-full"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        Learn More
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* MODAL */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
                            &times;
                        </button>

                        <h2>{selectedProduct.title}</h2>

                        <div className="modal-section">
                            <h3>Technical Specifications</h3>
                            <ul className="spec-list">
                                {selectedProduct.detailedInfo.specifications.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Products;
