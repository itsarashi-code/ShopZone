import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { loginAsGuest } = useAuth()
  const navigate = useNavigate()

  function handleGuestLogin() {
    loginAsGuest()
    navigate('/checkout')
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-icon">👤</div>

        <p className="section-tag">SHOPZONE ACCOUNT</p>

        <h1>Welcome Back</h1>

        <p className="login-description">
          Login to continue shopping and complete your order.
        </p>

        <button
          onClick={handleGuestLogin}
          className="login-button"
        >
          Continue as Guest
        </button>

        <p className="guest-note">
          No account required for guest checkout.
        </p>
      </section>
    </main>
  )
}

export default Login