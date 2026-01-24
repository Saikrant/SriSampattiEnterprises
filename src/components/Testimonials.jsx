import React, { useState } from "react";

const Testimonials = () => {
  const [activeReview, setActiveReview] = useState(null);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Homeowner, Telangana",
      text:
        "Absolutely thrilled with our new windows! The noise reduction is incredible and they look fantastic.",
      detailed:
        "Absolutely thrilled with our new windows! The noise reduction is incredible and they look fantastic. The team was professional, installation was clean, and the quality exceeded our expectations. Highly recommended for anyone upgrading their home."
    },
    {
      name: "Priya Reddy",
      role: "Architect",
      text:
        "Professional team and timely delivery. The quality of Sudhakar profiles is evident.",
      detailed:
        "Professional team and timely delivery. The quality of Sudhakar profiles is evident in both finish and performance. As an architect, I appreciate their attention to detail and structural strength."
    },
    {
      name: "Vikram Singh",
      role: "Business Owner",
      text:
        "Great service from start to finish. Very happy with the result.",
      detailed:
        "Great service from start to finish. The installation was quick, clean, and well coordinated. The end result enhanced the look of my commercial space significantly."
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
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              onClick={() => setActiveReview(t)}
            >
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{t.text}"</p>

              <div className="customer-info">
                <div className="customer-avatar"></div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 MODAL */}
      {activeReview && (
        <div className="testimonial-modal" onClick={() => setActiveReview(null)}>
          <div
            className="testimonial-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"{activeReview.detailed}"</p>

            <h4>{activeReview.name}</h4>
            <span>{activeReview.role}</span>

            <button
              className="btn btn-primary"
              onClick={() => setActiveReview(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
