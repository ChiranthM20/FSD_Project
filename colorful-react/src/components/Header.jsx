export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <h1>Colorful Store</h1>
      <button className="cart-btn" onClick={onCartClick}>
        🛒 View Cart ({cartCount})
      </button>
    </header>
  );
}
