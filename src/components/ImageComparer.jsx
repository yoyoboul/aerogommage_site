import { useState, useEffect, useRef } from 'react';
import '../styles/ImageComparer.css';

const ImageComparer = ({ beforeImage, afterImage, beforeAlt, afterAlt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  // Gestion du déplacement du curseur
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = container.offsetWidth;
    
    // Calculer la position en pourcentage (entre 0 et 100)
    const position = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(position);
  };
  
  // Gestion tactile pour mobile
  const handleTouchStart = () => {
    setIsDragging(true);
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const containerWidth = container.offsetWidth;
    
    const position = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(position);
  };
  
  // Gestion des événements tactiles et souris
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  return (
    <div 
      className="image-comparer" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="image-container">
        {/* Image Après (arrière-plan) */}
        <img 
          src={afterImage} 
          alt={afterAlt || "Après aérogommage"} 
          className="image after-image" 
        />
        
        {/* Image Avant (superposée avec clip-path) */}
        <div 
          className="before-image-container" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={beforeAlt || "Avant aérogommage"} 
            className="image before-image" 
          />
        </div>
        
        {/* Curseur de comparaison */}
        <div 
          className="slider-handle"
          style={{ left: `calc(${sliderPosition}% - 20px)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="slider-button">
            <div className="slider-arrows">
              <span className="arrow left">&#9664;</span>
              <span className="arrow right">&#9654;</span>
            </div>
          </div>
          <div className="slider-line"></div>
        </div>
        
        {/* Étiquettes Avant/Après */}
        <div className="image-labels">
          <span 
            className="before-label"
            style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
          >
            AVANT
          </span>
          <span 
            className="after-label"
            style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
          >
            APRÈS
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageComparer; 