import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  function handleBuyNow() {
    addToCart(product)
    navigate('/checkout')
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-card-content">
        <p className="product-category">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h2 className="product-title">
            {product.title}
          </h2>
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <strong className="product-price">
            ${product.price}
          </strong>

          <Link
            to={`/product/${product.id}`}
            className="view-button"
          >
            View
          </Link>
        </div>

        <button
          onClick={handleBuyNow}
          className="buy-button"
        >
          ⚡ Buy Now
        </button>
      </div>
    </article>
  )
}

export default ProductCard