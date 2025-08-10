import React from 'react';

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="add-to-cart" onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}
