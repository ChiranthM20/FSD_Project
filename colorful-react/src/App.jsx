import React from "react";
import Header from "./components/Header";
import CategoryButtons from "./components/CategoryButtons";
import "./App.css"; // Make sure styles are imported

export default function App() {
  const [cartCount, setCartCount] = React.useState(0);

  const onCartClick = () => {
    alert("Cart clicked!"); // Replace with your cart modal logic
  };

  return (
    <div>
      {/* Header */}
      <div className="header-container">
        <Header>
          <button className="cart-btn" onClick={onCartClick}>
            🛒 View Cart ({cartCount})
          </button>
        </Header>
      </div>

      {/* Categories */}
      <CategoryButtons>
        <div className="category-buttons">
          <div className="section-card">Clothing</div>
          <div className="section-card">Shoes</div>
          <div className="section-card">Gadgets</div>
        </div>
      </CategoryButtons>
    </div>
  );
}
