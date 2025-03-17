import React from 'react';

export default function NqtProduct() {
  return (
    <div className="page-container">
      <h2>Our Products</h2>
      <div className="product-grid">
        <div className="product-card">
          <h3>Product 1</h3>
          <p>$29.99</p>
        </div>
        <div className="product-card">
          <h3>Product 2</h3>
          <p>$39.99</p>
        </div>
      </div>
    </div>
  );
}