import { useState } from 'react'
import './App.css'
import ImageComparer from './components/ImageComparer'
import TestimonialCarousel from './components/TestimonialCarousel'

function App() {
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type_service: '',
    message: '',
    consentement: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  
  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const selectService = (serviceType) => {
    setFormData({
      ...formData,
      type_service: serviceType
    });
    
    // Clear error for service field
    if (formErrors.type_service) {
      setFormErrors({
        ...formErrors,
        type_service: null
      });
    }
    
    // Scroll to form
    document.getElementById('devis-form').scrollIntoView({ behavior: 'smooth' });
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.nom.trim()) errors.nom = "Votre nom est requis";
    
    if (!formData.email.trim()) {
      errors.email = "Votre email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format d'email invalide";
    }
    
    if (formData.telephone && !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.telephone)) {
      errors.telephone = "Format de téléphone invalide";
    }
    
    if (!formData.type_service) errors.type_service = "Veuillez sélectionner un type de service";
    
    if (!formData.message.trim()) errors.message = "Veuillez décrire votre projet";
    
    if (!formData.consentement) errors.consentement = "Vous devez accepter les conditions";
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormSuccess(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          type_service: '',
          message: '',
          consentement: false
        });
      }, 5000);
    }, 1000);
  };

  const services = [
    {
      title: "Rénovation de bâtiments",
      category: "BÂTIMENT",
      description: "Redonnez vie à vos façades et structures avec notre technique d'aérogommage non abrasive.",
      icon: <i className="fas fa-building"></i>,
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
      icon: <i className="fas fa-tree"></i>,
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
      icon: <i className="fas fa-cog"></i>,
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
      icon: <i className="fas fa-car-side"></i>,
      items: [
        "Décapage de carrosseries et châssis",
        "Restauration de jantes et pièces mécaniques",
        "Traitement d'objets anciens et de collection",
        "Préservation du patrimoine local (objets traditionnels de l'Oise)"
      ]
    }
  ];

  // Données des témoignages
  const testimonials = [
    {
      text: "Nous avons fait appel à cette entreprise pour rénover la façade en pierre de notre maison ancienne. Le résultat est impressionnant, toutes les traces de pollution ont disparu et la pierre a retrouvé sa beauté d'origine. Excellent travail, respect des délais et approche écologique appréciée.",
      author: "Jean Dupont",
      role: "Propriétaire à Beauvais",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Une intervention rapide et professionnelle pour le décapage de nos volets en bois. Fini les produits chimiques nocifs, l'aérogommage est vraiment efficace et préserve l'aspect naturel du bois. Je recommande vivement !",
      author: "Marie Legrand",
      role: "Cliente particulière",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Travail de grande qualité pour la restauration de notre portail en fer forgé. Le résultat est impeccable et le prix très compétitif. L'équipe est sérieuse, ponctuelle et à l'écoute. Merci pour cette rénovation réussie !",
      author: "Philippe Martin",
      role: "Architecte d'intérieur",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      text: "J'ai confié la rénovation de ma voiture de collection à ces professionnels de l'aérogommage. Le châssis a été parfaitement décapé sans aucune déformation. Un savoir-faire remarquable pour les objets de valeur.",
      author: "Sophie Dubois",
      role: "Collectionneuse automobile",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="/estimateur" className="nav-link">Estimation de coût</a>
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
                  <span className="service-toggle">
                    {activeService === index ? 
                      <i className="fas fa-minus"></i> : 
                      <i className="fas fa-plus"></i>
                    }
                  </span>
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
              <h3><i className="fas fa-leaf"></i> Démarche Écologique</h3>
              <p>L'aérogommage utilise uniquement des matériaux naturels et biodégradables. Notre processus minimise la consommation d'eau et ne génère aucun rejet toxique, respectant ainsi l'environnement préservé de l'Oise.</p>
            </div>
            <div className="info-card area">
              <h3><i className="fas fa-map-marker-alt"></i> Zone d'Intervention</h3>
              <p>Nous intervenons dans tout le département de l'Oise (60) et ses environs : Beauvais, Compiègne, Creil, Senlis, Chantilly, Clermont, Noyon et dans les départements limitrophes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimation CTA Banner - Section remplaçant l'estimateur intégré */}
      <section className="section estimator-cta-section">
        <div className="container">
          <div className="estimator-cta-banner">
            <div className="estimator-cta-content">
              <h2>Estimez le coût de vos travaux</h2>
              <p>Utilisez notre outil d'estimation interactif pour obtenir une idée du coût de vos travaux d'aérogommage. Simple, rapide et sans engagement.</p>
            </div>
            <div className="estimator-cta-action">
              <a href="/estimateur" className="btn btn-primary btn-large">
                <i className="fas fa-calculator"></i> Accéder à l'estimateur
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="container">
          <h2 className="section-title gallery-title">GALERIE AVANT & APRÈS</h2>
          <p className="gallery-description">
            Faites glisser le curseur pour voir les résultats impressionnants de nos travaux d'aérogommage.
          </p>
          
          <div className="gallery-interactive">
            <ImageComparer 
              beforeImage="/Avant.png" 
              afterImage="/Apres.png" 
              beforeAlt="Surface avant aérogommage" 
              afterAlt="Surface après aérogommage" 
            />
          </div>
          
          <div className="gallery-cta">
            <a href="#devis" className="btn btn-secondary">Demander un devis pour votre projet</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mise à jour avec le carrousel */}
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">TÉMOIGNAGES CLIENTS</h2>
          <p className="testimonials-description">
            Découvrez ce que nos clients disent de nos services d'aérogommage professionnel dans l'Oise et ses environs.
          </p>
          
          <TestimonialCarousel testimonials={testimonials} />
          
          <div className="testimonials-cta">
            <a href="#devis" className="btn btn-secondary">Demander votre devis personnalisé</a>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated with interactive form */}
      <section id="devis" className="section contact-section">
        <div className="container">
          <h2 className="section-title contact-title">DEMANDER UN DEVIS</h2>
          <p className="contact-description">
            Complétez le formulaire ci-dessous pour obtenir un devis personnalisé pour vos travaux d'aérogommage.
          </p>
          
          <div className="contact-services">
            <h3 className="contact-subtitle">Sélectionnez votre projet</h3>
            <div className="service-selector">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`service-option ${formData.type_service === service.title ? 'selected' : ''}`}
                  onClick={() => selectService(service.title)}
                >
                  <div className="service-option-icon">
                    {service.icon}
                  </div>
                  <div className="service-option-content">
                    <h4>{service.title}</h4>
                    <p>{service.category}</p>
                  </div>
                </div>
              ))}
            </div>
            {formErrors.type_service && (
              <div className="form-error">{formErrors.type_service}</div>
            )}
          </div>
          
          <div id="devis-form" className="contact-form-container">
            {formSuccess ? (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <h3>Demande envoyée avec succès !</h3>
                <p>Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nom">Nom complet <span className="required">*</span></label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className={formErrors.nom ? 'error' : ''}
                      placeholder="Votre nom et prénom"
                    />
                    {formErrors.nom && <div className="form-error">{formErrors.nom}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? 'error' : ''}
                      placeholder="exemple@domaine.com"
                    />
                    {formErrors.email && <div className="form-error">{formErrors.email}</div>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className={formErrors.telephone ? 'error' : ''}
                      placeholder="06 XX XX XX XX"
                    />
                    {formErrors.telephone && <div className="form-error">{formErrors.telephone}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="type_service">Type de service <span className="required">*</span></label>
                    <select
                      id="type_service"
                      name="type_service"
                      value={formData.type_service}
                      onChange={handleInputChange}
                      className={formErrors.type_service ? 'error' : ''}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    {formErrors.type_service && <div className="form-error">{formErrors.type_service}</div>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Description du projet <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={formErrors.message ? 'error' : ''}
                    placeholder="Décrivez votre projet d'aérogommage (type de surface, dimensions, état actuel, etc.)"
                    rows="5"
                  ></textarea>
                  {formErrors.message && <div className="form-error">{formErrors.message}</div>}
                </div>
                
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="consentement"
                    name="consentement"
                    checked={formData.consentement}
                    onChange={handleInputChange}
                    className={formErrors.consentement ? 'error' : ''}
                  />
                  <label htmlFor="consentement">
                    J'accepte que mes données soient utilisées pour me recontacter <span className="required">*</span>
                  </label>
                  {formErrors.consentement && <div className="form-error">{formErrors.consentement}</div>}
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-large">
                    <i className="fas fa-paper-plane"></i> Envoyer ma demande
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <h4>Par téléphone</h4>
                <p>06 XX XX XX XX</p>
                <p>Du lundi au vendredi, 8h-19h</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Par email</h4>
                <p>contact@aerogommage-oise.fr</p>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h4>Zone d'intervention</h4>
                <p>Département de l'Oise (60) et limitrophes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
