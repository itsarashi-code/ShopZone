import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            SHOPZONE
          </Link>

          <p>
            Simple shopping. Better experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-info">
          <h3>ShopZone</h3>

          <p>
            Discover products and enjoy a smooth
            shopping experience.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 SHOPZONE. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer