import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Homeowner, Telangana",
            text: "Absolutely thrilled with our new windows! The noise reduction is incredible and they look fantastic."
        },
        {
            name: "Priya Reddy",
            role: "Architect",
            text: "Professional team and timely delivery. The quality of Sudhakar profiles is evident. Highly recommended!"
        },
        {
            name: "Vikram Singh",
            role: "Business Owner",
            text: "Great service from start to finish. The installation was quick and clean. Very happy with the result."
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Don't just take our word for it</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>"{testimonial.text}"</p>
                            <div className="customer-info">
                                <div className="customer-avatar"></div>
                                <div>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
