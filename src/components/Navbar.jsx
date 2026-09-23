import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cart } = useCart()
  const location = useLocation()

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SHOPZONE
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>

        <Link
          to="/shop"
          className={location.pathname === '/shop' ? 'active' : ''}
        >
          Shop
        </Link>

        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className={location.pathname === '/login' ? 'active' : ''}
        >
          Login
        </Link>

        <Link
          to="/cart"
          className={`cart-link ${
            location.pathname === '/cart' ? 'active' : ''
          }`}
        >
          🛒 Cart

          <span className="cart-badge">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar