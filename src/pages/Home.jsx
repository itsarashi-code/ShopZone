import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO SHOPZONE</p>

          <h1>
            Shop Smart.
            <br />
            Shop Easy.
          </h1>

          <p className="hero-description">
            Discover amazing products at great prices,
            all in one place.
          </p>

          <Link to="/shop" className="hero-button">
            Explore Products
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home