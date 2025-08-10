import React from 'react';

export default function CategoryButtons({ onSelect }) {
  return (
    <section className="category-buttons">
      <div className="category-box" onClick={() => onSelect('clothing')}>👕 Clothings</div>
      <div className="category-box" onClick={() => onSelect('shoes')}>👟 Shoes</div>
      <div className="category-box" onClick={() => onSelect('gadgets')}>📱 Gadgets</div>
    </section>
  );
}
