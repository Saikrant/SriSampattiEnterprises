import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/productsData";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* ================= PRODUCTS GRID ================= */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Product Range</span>
            <h2>Premium uPVC Systems</h2>
            <p>Powered by high-quality Sudhakar Profiles</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.slug} className="product-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                <div className="product-content">
                  <h3>{product.title}</h3>

                  {/* SHORT DESCRIPTION ONLY */}
                  <p>{product.shortDescription || product.description}</p>

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

      {/* ================= PRODUCT MODAL ================= */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            <h2>{selectedProduct.title}</h2>

            {/* BASIC INTRO */}
            {selectedProduct.introduction && (
              <p style={{ marginBottom: "1.5rem" }}>
                {selectedProduct.introduction}
              </p>
            )}

            {/* KEY HIGHLIGHTS (BASIC ONLY) */}
            {selectedProduct.highlights?.length > 0 && (
              <div className="modal-section">
                <h3>Key Highlights</h3>
                <ul className="benefits-list">
                  {selectedProduct.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* APPLICATIONS */}
            {selectedProduct.applications?.length > 0 && (
              <div className="modal-section">
                <h3>Applications</h3>
                <ul className="benefits-list">
                  {selectedProduct.applications.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setSelectedProduct(null)}
              >
                Enquire Now
              </a>

              <Link
                to={`/products/${selectedProduct.slug}`}
                className="btn btn-outline"
                onClick={() => setSelectedProduct(null)}
              >
                Product Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
