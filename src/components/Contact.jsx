import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toast, setToast] = useState("");

  /* 🔹 MOBILE DETECTION */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* 🔹 COPY HANDLER */
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setToast("Copied");
    setTimeout(() => setToast(""), 1600);
  };

  /* 🔹 VALIDATION */
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should contain only alphabets";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.location.trim()) {
      tempErrors.location = "Location is required";
    }

    if (!formData.requirement.trim()) {
      tempErrors.requirement = "Requirement is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* 🔹 SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setToast("Thank you! Our team will contact you shortly.");
      setFormData({
        name: "",
        phone: "",
        location: "",
        requirement: "",
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <>
      {/* 🔹 TOAST */}
      {toast && <div className="copy-toast">{toast}</div>}

      {/* 🔹 MOBILE WHATSAPP */}
      {isMobile && (
        <div className="mobile-call-buttons">
          <a
            href="https://wa.me/919515104922"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-call-floating"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: 28, height: 28 }}
            />
          </a>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container contact-container">

          {/* INFO */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? We’re here to help.</p>

            <div className="contact-item">
              <div className="contact-text">
                <h4>Phone</h4>

                <div className="copy-row">
                  <span>+91 95151 04922</span>
                  <button className="copy-btn" onClick={() => copyText("+919515104922")}>
                    Copy
                  </button>
                </div>

                <div className="copy-row">
                  <span>+91 94833 33456</span>
                  <button className="copy-btn" onClick={() => copyText("+919483333456")}>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-text">
                <h4>Email</h4>
                <div className="copy-row">
                  <span>info@srisampatti.com</span>
                  <button className="copy-btn" onClick={() => copyText("info@srisampatti.com")}>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-text">
                <h4>Factory Address</h4>
                <p>
                  Sy No. 382 (P) Pleasant Hills, Himayatsagar Road,
                  Rajendranagar, Hyderabad – 500030
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">
            <h3>Request a Free Quote</h3>
            <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "1.4rem" }}>
              Share your requirement and our experts will guide you.
            </p>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="form-group">
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      setFormData({ ...formData, name: value });
                      setErrors({ ...errors, name: "" });
                    }}
                  />
                  <label>Full Name</label>
                </div>
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              {/* PHONE */}
              <div className="form-group">
                <div className="phone-row">
                  <div className="form-floating phone-country">
                    <input type="text" value="🇮🇳 +91" disabled />
                    <label>Country</label>
                  </div>

                  <div className="form-floating phone-input">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          setFormData({ ...formData, phone: value });
                          setErrors({ ...errors, phone: "" });
                        }
                      }}
                    />
                    <label>Phone Number</label>
                  </div>
                </div>
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              {/* LOCATION */}
              <div className="form-group">
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                      setErrors({ ...errors, location: "" });
                    }}
                  />
                  <label>Location</label>
                </div>
                {errors.location && <span className="error">{errors.location}</span>}
              </div>

              {/* REQUIREMENT */}
              <div className="form-group">
                <div className="form-floating">
                  <textarea
                    rows="4"
                    placeholder="Your Requirement"
                    value={formData.requirement}
                    onChange={(e) => {
                      setFormData({ ...formData, requirement: e.target.value });
                      setErrors({ ...errors, requirement: "" });
                    }}
                  />
                  <label>Your Requirement</label>
                </div>
                {errors.requirement && (
                  <span className="error">{errors.requirement}</span>
                )}
              </div>

              {/* TRUST LINE */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748b",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                ✔ Free consultation • ✔ No spam • ✔ Response within 24 hours
              </p>

              {/* SUBMIT */}
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Free Quote"}
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
