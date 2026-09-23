import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [addedMessage, setAddedMessage] = useState('')

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Product not found')
        }

        return response.json()
      })
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setError('Unable to load product.')
        setLoading(false)
      })
  }, [id])

  function handleAddToCart() {
    addToCart(product)
    setAddedMessage('Product added to cart!')

    setTimeout(() => {
      setAddedMessage('')
    }, 3000)
  }

  if (loading) {
    return (
      <main className="status-page">
        <h2>Loading product...</h2>
      </main>
    )
  }

  if (error) {
    return (
      <main className="status-page">
        <h2>{error}</h2>
      </main>
    )
  }

  return (
    <main className="product-details-page">
      <Link to="/shop" className="back-link">
        ← Back to Shop
      </Link>

      <section className="product-details">
        <div className="product-details-image">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="product-details-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="details-price">
            ${product.price}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-meta">
            <span>⭐ {product.rating}</span>
            <span>Stock: {product.stock}</span>
          </div>

         <div className="details-actions">
            <button
                onClick={handleAddToCart}
                className="details-cart-button"
            >
                🛒 Add to Cart
            </button>

            <Link
                to="/checkout"
                className="details-buy-button"
                onClick={() => addToCart(product)}
            >
                ⚡ Buy Now
            </Link>
            </div>

          {addedMessage && (
            <p className="success-message">
              ✅ {addedMessage}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProductDetails