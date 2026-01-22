import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero-image.jpg";
import factoryImage from "../assets/factory.png";
import AnimatedWord from "./AnimatedWord";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeMessage, setTimeMessage] = useState("");
  const [years, setYears] = useState(0);

  const slides = [
    {
      image: heroImage,
      subtitle: "Trusted uPVC Solutions in Hyderabad",
      title: "Sri Sampatti Enterprises Pvt Ltd",
      desc:
        "Delivering durable, energy-efficient, and modern uPVC window and door solutions for Indian homes and commercial spaces.",
    },
    {
      image: factoryImage,
      subtitle: "Quality • Reliability • Performance",
      title: "Designed for Indian Living",
      desc:
        "Engineered with advanced materials and global technology standards to ensure comfort, safety, and long-lasting performance.",
    },
  ];

  /* 🔹 TIME-BASED MESSAGING */
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      setTimeMessage("Plan your home upgrades today");
    } else if (hour >= 12 && hour < 18) {
      setTimeMessage("Upgrade your space with premium uPVC");
    } else {
      setTimeMessage("Talk to our experts tomorrow");
    }
  }, []);

  /* 🔹 SLIDE AUTO ROTATION */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  /* 🔹 YEARS COUNTER */
  useEffect(() => {
    let start = 0;
    const end = 15;
    const duration = 1500;
    const stepTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setYears(start);
      if (start === end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* CONTENT */}
        <div className="hero-content">
          {/* Time Message */}
          <p
            style={{
              color: "var(--primary-color)",
              fontWeight: 600,
              fontSize: "1.05rem",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {timeMessage}
          </p>

          <p
            style={{
              color: "var(--secondary-color)",
              fontWeight: 600,
              fontSize: "1.1rem",
              marginBottom: "1rem",
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

          {/* 🔹 STATS WITH ROULETTE TEXT */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">
                <AnimatedWord text="Premium" delay={300} />
              </span>
              <span className="stat-label">uPVC Solutions</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">
                <AnimatedWord text="Advanced" delay={600} />
              </span>
              <span className="stat-label">Technology</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">{years}+</span>
              <span className="stat-label">Years of Trust</span>
            </div>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="hero-image-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
