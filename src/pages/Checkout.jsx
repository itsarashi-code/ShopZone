import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { logout } = useAuth()

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart()

  const [orderPlaced, setOrderPlaced] = useState(false)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  function handlePlaceOrder() {
    clearCart()
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <section className="order-success">
          <div className="success-icon">✓</div>

          <p className="section-tag">SHOPZONE ORDER</p>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with SHOPZONE.
            Your order has been confirmed.
          </p>

          <Link
            to="/shop"
            className="checkout-button success-button"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <p className="section-tag">SHOPZONE CHECKOUT</p>

        <h1>Complete Your Order</h1>

        <p>
          Review your order and place it securely.
        </p>
      </div>

      {cart.length === 0 ? (
        <section className="empty-checkout">
          <h2>Your cart is empty</h2>

          <p>
            Add some products before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="checkout-button"
          >
            Browse Products
          </Link>
        </section>
      ) : (
        <section className="checkout-layout">
          <div className="checkout-products">
            <div className="checkout-section-title">
              <h2>Order Summary</h2>

              <span>
                {cart.length} item{cart.length > 1 ? 's' : ''}
              </span>
            </div>

            {cart.map((item) => (
              <article
                className="checkout-product"
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="checkout-product-image"
                />

                <div className="checkout-product-info">
                  <p className="product-category">
                    {item.category}
                  </p>

                  <h3>{item.title}</h3>

                  <p className="checkout-price">
                    Price: ${item.price}
                  </p>

                  <div className="checkout-quantity">
                    <span>Quantity</span>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </div>

          <aside className="checkout-summary">
            <h2>Payment Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="place-order-button"
            >
              Place Order
            </button>

            <p className="guest-checkout-note">
              You are checking out as a guest.
            </p>

            <button
              onClick={logout}
              className="logout-button"
            >
              Logout
            </button>
          </aside>
        </section>
      )}
    </main>
  )
}

export default Checkout