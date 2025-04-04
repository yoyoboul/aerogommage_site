import { useState, useEffect } from 'react';
import '../styles/TestimonialCarousel.css';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Fonction pour passer au témoignage suivant
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    
    // Réinitialiser l'état d'animation après la transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Fonction pour passer au témoignage précédent
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    
    // Réinitialiser l'état d'animation après la transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Défilement automatique
  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Changer de témoignage toutes les 5 secondes
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, currentIndex, testimonials.length]);

  // Mettre en pause le défilement automatique au survol
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Navigation directe vers un témoignage spécifique
  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div 
      className="testimonial-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            <div className="testimonial-content">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author-info">
                <div className="testimonial-avatar">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  ) : (
                    <div className="avatar-placeholder">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="testimonial-meta">
                  <p className="testimonial-author">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="testimonial-role">{testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Flèches de navigation */}
      <button 
        className="carousel-arrow prev"
        onClick={prevTestimonial}
        aria-label="Témoignage précédent"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button 
        className="carousel-arrow next"
        onClick={nextTestimonial}
        aria-label="Témoignage suivant"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      
      {/* Indicateurs */}
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 