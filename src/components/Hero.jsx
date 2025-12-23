import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.jpg';
import factoryImage from '../assets/factory.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: heroImage,
            subtitle: "Trusted uPVC Solutions in Hyderabad",
            title: "Sri Sampatti Enterprises Pvt Ltd",
            desc: "Delivering durable, energy-efficient, and modern uPVC window and door solutions for Indian homes and commercial spaces.",
            isProduct: false
        },
        {
            image: factoryImage,
            subtitle: "Quality • Reliability • Performance",
            title: "Designed for Indian Living",
            desc: "Engineered with advanced materials and global technology standards to ensure comfort, safety, and long-lasting performance.",
            isProduct: false
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                
                {/* Hero Content */}
                <div className="hero-content">
                    <p
                        className="lead-text"
                        style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        {slides[currentSlide].subtitle}
                    </p>

                    <h1 className="hero-title-anim">
                        {slides[currentSlide].title}
                    </h1>

                    <p className="hero-desc-anim">
                        {slides[currentSlide].desc}
                    </p>

                    <p className="company-desc">
                        Sri Sampatti Enterprises Pvt Ltd is a trusted provider of
                        premium uPVC window and door solutions. We focus on quality,
                        modern design, and dependable performance—offering end-to-end
                        solutions for villas, apartments, and commercial buildings
                        across Telangana, Andhra Pradesh & Karnataka.
                    </p>

                    <div className="hero-btns">
                        <a href="#contact" className="btn btn-primary">
                            Request Free Quote
                        </a>
                        <a href="#products" className="btn btn-outline">
                            Explore Products
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">Premium</span>
                            <span className="stat-label">uPVC Solutions</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Advanced</span>
                            <span className="stat-label">Technology</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Years of Trust</span>
                        </div>
                    </div>
                </div>

                {/* Image Slider */}
                <div className="hero-image-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                            />
                        </div>
                    ))}

                    <div className="slider-dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
