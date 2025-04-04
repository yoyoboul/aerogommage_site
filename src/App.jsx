import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Galerie Avant & Après</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-cta">
            <a href="#devis" className="btn btn-primary">DEMANDER UN DEVIS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="services-header">
            <div className="services-text">
              <h2 className="section-title">NOS SERVICES</h2>
              <p className="services-description">
                Service professionnel d'aérogommage pour<br />
                bois, métal, pierre et plus encore.
              </p>
            </div>
            <div className="services-cta">
              <a href="#gallery" className="btn btn-primary btn-large">VOIR NOS RÉALISATIONS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <h2 className="section-title gallery-title">GALERIE AVANT & APRÈS</h2>
          <div className="gallery-container">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x600/D9D9D9/333333?text=Avant+Aerogommage" alt="Avant aérogommage" className="gallery-img" />
              <p className="gallery-label">AVANT</p>
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/800x600/E5E5E5/333333?text=Apres+Aerogommage" alt="Après aérogommage" className="gallery-img" />
              <p className="gallery-label">APRÈS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">TÉMOIGNAGES</h2>
          <div className="testimonial">
            <div className="testimonial-avatar">
              <div className="avatar-img"></div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                Excellent travail, respect des délais et approoché écologique appréciée.
              </p>
              <p className="testimonial-author">Jean Dupont</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="devis" className="section contact-section">
        <div className="container">
          <h2 className="section-title contact-title">DEMANDER UN DEVIS</h2>
          <p className="contact-description">Contactez-nous aujourd'hui pour un devis gratuit.</p>
        </div>
      </section>
    </div>
  )
}

export default App
