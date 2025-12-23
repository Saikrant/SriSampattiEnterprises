import React from 'react';
import factoryImage from '../assets/factory.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                
                {/* About Content */}
                <div className="about-content">
                    <h2>About Sri Sampatti Enterprises</h2>

                    <p className="lead">
                        Trusted Partner for Modern uPVC Window & Door Solutions
                    </p>

                    <p>
                        Sri Sampatti Enterprises Pvt Ltd specializes in delivering
                        premium uPVC window and door solutions designed for modern
                        residential and commercial spaces. With a strong emphasis
                        on quality, durability, and contemporary design, we serve
                        projects across Telangana, Andhra Pradesh, and Karnataka.
                    </p>

                    {/*  Content after transition – updated */}
                    <p>
                        We follow a structured and transparent approach to every
                        project, ensuring precision at each stage of execution.
                        From initial consultation and site evaluation to detailed
                        planning and professional installation, our team delivers
                        solutions that meet functional, aesthetic, and performance
                        expectations.
                    </p>
                    
                    <p>
                        Built using premium <strong>Sudhakar Profiles</strong>, our
                        systems are <strong>Lead-Free</strong>,
                        <strong> RoHS Compliant</strong>, and developed with
                        advanced <strong>German technology</strong>. These
                        standards ensure excellent UV resistance, long-term color
                        stability, and minimal maintenance. Customer trust, quality
                        execution, and long-lasting value remain at the core of
                        everything we do.
                    </p>

                    {/* Stats */}
                    <div className="about-stats">
                        <div className="stat">
                            <strong>Premium</strong>
                            <span>Sudhakar Profiles</span>
                        </div>
                        <div className="stat">
                            <strong>German</strong>
                            <span>Engineering</span>
                        </div>
                        <div className="stat">
                            <strong>Quality</strong>
                            <span>Assured</span>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="about-image">
                    <img
                        src={factoryImage}
                        alt="Sri Sampatti Enterprises Facility"
                        style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '1rem'
                        }}
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
