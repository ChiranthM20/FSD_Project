export default function CartModal({ cart, removeFromCart, bookProducts, onClose }) {
  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Qty: {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h3>
              Total: ₹
              {cart.reduce((total, item) => total + item.price * item.qty, 0)}
            </h3>
            <button onClick={bookProducts}>Book Now</button>
          </>
        )}
      </div>
    </div>
  );
}
