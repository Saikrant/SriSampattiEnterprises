import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/productsData";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [zoomImage, setZoomImage] = useState(null);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail-page">
      {/* Back */}
      <Link to="/#products" className="back-link">
        ← Back to Products
      </Link>

      {/* ================= HERO ================= */}
      <div className="product-hero">
        <div className="product-hero-text">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          {/* ✅ CTA – BELOW SHORT DESCRIPTION */}
          <Link
            to="/#contact"
            className="btn btn-primary"
            style={{ marginTop: "1.5rem", display: "inline-block" }}
          >
            Enquire Now
          </Link>
        </div>

        <div className="product-hero-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* ================= SYSTEM HIGHLIGHTS ================= */}
      <section className="details-section">
        <h3>System Highlights</h3>
        <div className="highlights-grid">
          {product.highlights.map((item, i) => (
            <div key={i} className="highlight-box">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONFIGURATION ================= */}
      {product.configurationImage && (
        <section className="details-section">
          <h3>Configurations</h3>
          <div className="config-image-wrapper">
            <img
              src={product.configurationImage}
              alt="Configuration"
              onClick={() => setZoomImage(product.configurationImage)}
              style={{ cursor: "zoom-in" }}
            />
          </div>
        </section>
      )}

      {/* ================= PROFILE SERIES ================= */}
      {product.series && (
        <section className="details-section">
          <h3>Profile Series</h3>
          <div className="series-grid">
            {product.series.map((s, i) => (
              <div key={i} className="series-card">
                <h4>{s.name}</h4>
                <img
                  src={s.image}
                  alt={s.name}
                  onClick={() => setZoomImage(s.image)}
                  style={{ cursor: "zoom-in" }}
                />
                <small>Click image to enlarge</small>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= APPLICATIONS ================= */}
      <section className="details-section">
        <h3>Applications</h3>
        <div className="applications-grid">
          {product.applications.map((app, i) => (
            <span key={i} className="application-pill">
              {app}
            </span>
          ))}
        </div>
      </section>

      {/* ================= IMAGE ZOOM MODAL ================= */}
      {zoomImage && (
        <div className="modal-overlay" onClick={() => setZoomImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setZoomImage(null)}
            >
              &times;
            </button>
            <img src={zoomImage} alt="Zoomed" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
