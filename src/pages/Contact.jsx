import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-header">
        <p className="section-tag">GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p>
          Have a question? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-card">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="How can we help you?"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-button"
          >
            Send Message
          </button>

          {submitted && (
            <p className="contact-success">
              ✅ Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Contact