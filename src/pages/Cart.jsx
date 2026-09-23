import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p className="section-tag">SHOPZONE</p>

        <h1>Your Cart</h1>

        <p>
          Review your selected products before checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link to="/shop" className="checkout-button">
            Start Shopping
          </Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <p className="product-category">
                    {item.category}
                  </p>

                  <h2>{item.title}</h2>

                  <p className="cart-item-price">
                    ${item.price}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>

                <strong className="cart-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="continue-button"
            >
              Continue Shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Cart