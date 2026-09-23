import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        return response.json()
      })
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setError('Unable to load products.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main className="status-page">
        <h2>Loading products...</h2>
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
    <main className="shop-page">
      <section className="shop-header">
        <p className="section-tag">SHOPZONE STORE</p>

        <h1>Explore Products</h1>

        <p>
          Find something you love from our collection.
        </p>
      </section>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}

export default Shop