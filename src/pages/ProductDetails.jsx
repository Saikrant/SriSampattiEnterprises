import { useParams, Link } from "react-router-dom";
import { products } from "../data/productsData";
import { useState } from "react";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [zoomImage, setZoomImage] = useState(null);

  if (!product) return null;

  return (
    <div className="product-detail-page">
      <Link to="/#products" className="back-link">
        ← Back to Products
      </Link>

      {/* ================= HERO ================= */}
      <div className="product-hero">
        <div className="product-hero-text">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button className="btn btn-primary">Enquire Now</button>
        </div>

        <div className="product-hero-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      {/* ================= SYSTEM HIGHLIGHTS ================= */}
      {product.highlights?.length > 0 && (
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
      )}

      {/* ================= CONFIGURATIONS / OPENING SYSTEMS ================= */}
      {product.configurationImage && (
        <section className="details-section">
          <h3>
            {product.slug === "casement-windows"
              ? "Opening Systems"
              : "Configurations"}
          </h3>

          <div className="config-image-wrapper">
            <img
              src={product.configurationImage}
              alt={
                product.slug === "casement-windows"
                  ? "Casement Opening Systems"
                  : "Product Configurations"
              }
              onClick={() => setZoomImage(product.configurationImage)}
            />
          </div>
        </section>
      )}

      {/* ================= PROFILE SERIES ================= */}
      {product.series?.length > 0 && (
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
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= APPLICATIONS ================= */}
      {product.applications?.length > 0 && (
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
      )}

      {/* ================= IMAGE MODAL ================= */}
      {zoomImage && (
        <div className="modal-overlay" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} alt="Zoomed" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
