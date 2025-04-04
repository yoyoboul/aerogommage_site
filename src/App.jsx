import { useState } from 'react'
import './App.css'

function App() {
  const [activeService, setActiveService] = useState(null);
  
  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const services = [
    {
      title: "Rénovation de bâtiments",
      category: "BÂTIMENT",
      description: "Redonnez vie à vos façades et structures avec notre technique d'aérogommage non abrasive.",
      icon: "🏡",
      items: [
        "Décapage de façades et murs extérieurs",
        "Nettoyage de pierres de taille et briques apparentes",
        "Ravalement de murs en pierre calcaire typiques de l'Oise",
        "Retrait de graffitis et peintures"
      ]
    },
    {
      title: "Restauration de bois",
      category: "BOIS",
      description: "Préservez le charme et l'authenticité de vos boiseries sans produits chimiques agressifs.",
      icon: "🪵",
      items: [
        "Décapage de meubles et boiseries anciennes",
        "Rénovation de poutres et charpentes apparentes",
        "Traitement des chalets et bardages en bois",
        "Restauration de portes et volets en bois"
      ]
    },
    {
      title: "Traitement des métaux",
      category: "MÉTAL",
      description: "Éliminez rouille et corrosion tout en préservant l'intégrité des surfaces métalliques.",
      icon: "⚙️",
      items: [
        "Décapage de structures métalliques",
        "Préparation de surfaces avant peinture",
        "Restauration de mobilier de jardin",
        "Nettoyage d'équipements agricoles (secteur rural de l'Oise)"
      ]
    },
    {
      title: "Véhicules & Objets de collection",
      category: "COLLECTION",
      description: "Une approche délicate et précise pour vos biens les plus précieux et pièces anciennes.",
      icon: "🚗",
      items: [
        "Décapage de carrosseries et châssis",
        "Restauration de jantes et pièces mécaniques",
        "Traitement d'objets anciens et de collection",
        "Préservation du patrimoine local (objets traditionnels de l'Oise)"
      ]
    }
  ];

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
                Services professionnels d'aérogommage dans l'Oise et ses environs.<br />
                Une solution écologique et efficace pour tous vos projets de rénovation.
              </p>
            </div>
            <div className="services-cta">
              <a href="#devis" className="btn btn-primary btn-large">DEMANDER UN DEVIS</a>
            </div>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onClick={() => toggleService(index)}
              >
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-category">{service.category}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-toggle">{activeService === index ? '−' : '+'}</span>
                </div>
                
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
                
                <div className="service-details">
                  <ul className="service-list">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="service-item">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-card-footer">
                  <span className="click-hint">
                    {activeService === index ? 'Cliquez pour fermer' : 'Cliquez pour voir les détails'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="services-info">
            <div className="info-card eco">
              <h3>Démarche Écologique</h3>
              <p>L'aérogommage utilise uniquement des matériaux naturels et biodégradables. Notre processus minimise la consommation d'eau et ne génère aucun rejet toxique, respectant ainsi l'environnement préservé de l'Oise.</p>
            </div>
            <div className="info-card area">
              <h3>Zone d'Intervention</h3>
              <p>Nous intervenons dans tout le département de l'Oise (60) et ses environs : Beauvais, Compiègne, Creil, Senlis, Chantilly, Clermont, Noyon et dans les départements limitrophes.</p>
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
              <img src="/Avant.png" alt="Avant aérogommage" className="gallery-img" />
              <p className="gallery-label">AVANT</p>
            </div>
            <div className="gallery-item">
              <img src="/Apres.png" alt="Après aérogommage" className="gallery-img" />
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
                Excellent travail, respect des délais et approche écologique appréciée.
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
