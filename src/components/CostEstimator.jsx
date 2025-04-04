import { useState, useEffect } from 'react';
import '../styles/CostEstimator.css';

const CostEstimator = () => {
  const [surface, setSurface] = useState('facade');
  const [material, setMaterial] = useState('pierre');
  const [size, setSize] = useState(10);
  const [complexity, setComplexity] = useState('moyen');
  const [distance, setDistance] = useState(20);
  const [estimate, setEstimate] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);
  
  // Prix de base par m² selon le matériau (en euros)
  const basePrices = {
    pierre: 45,
    bois: 38,
    metal: 42,
    autre: 50
  };
  
  // Facteurs multiplicateurs selon la complexité
  const complexityFactors = {
    simple: 0.8,
    moyen: 1,
    complexe: 1.3
  };
  
  // Facteurs multiplicateurs selon la surface
  const surfaceFactors = {
    facade: 1,
    meuble: 1.2,
    vehicule: 1.4,
    autre: 1.1
  };
  
  // Calcul de l'estimation
  const calculateEstimate = () => {
    // Prix de base selon le matériau
    const basePrice = basePrices[material] || basePrices.autre;
    
    // Facteur de complexité
    const complexityFactor = complexityFactors[complexity] || complexityFactors.moyen;
    
    // Facteur selon le type de surface
    const surfaceFactor = surfaceFactors[surface] || surfaceFactors.autre;
    
    // Calcul du prix au m²
    const pricePerSquareMeter = basePrice * complexityFactor * surfaceFactor;
    
    // Calcul du prix total
    let totalPrice = pricePerSquareMeter * size;
    
    // Ajout des frais de déplacement si distance > 30km
    const travelCost = distance > 30 ? (distance - 30) * 1.5 : 0;
    
    // Prix total avec déplacement
    totalPrice += travelCost;
    
    // Fourchette de prix (+/- 15%)
    const minPrice = Math.round(totalPrice * 0.85);
    const maxPrice = Math.round(totalPrice * 1.15);
    
    return {
      min: minPrice,
      max: maxPrice,
      pricePerSquareMeter: Math.round(pricePerSquareMeter),
      travelCost: Math.round(travelCost)
    };
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const estimatedCost = calculateEstimate();
    setEstimate(estimatedCost);
    setShowEstimate(true);
  };
  
  const handleReset = () => {
    setSurface('facade');
    setMaterial('pierre');
    setSize(10);
    setComplexity('moyen');
    setDistance(20);
    setShowEstimate(false);
  };
  
  return (
    <div className="cost-estimator-container">
      <div className="cost-estimator-wrapper">
        <h3 className="estimator-title">Estimez le coût de vos travaux</h3>
        <p className="estimator-description">
          Utilisez cet outil pour obtenir une estimation approximative du coût de vos travaux d'aérogommage.
          Cette estimation est fournie à titre indicatif et ne constitue pas un devis définitif.
        </p>
        
        <form className="estimator-form" onSubmit={handleSubmit}>
          <div className="estimator-grid">
            <div className="estimator-group">
              <label htmlFor="surface">Type de surface</label>
              <select 
                id="surface" 
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
              >
                <option value="facade">Façade / Mur</option>
                <option value="meuble">Meuble / Boiserie</option>
                <option value="vehicule">Véhicule / Objet métallique</option>
                <option value="autre">Autre surface</option>
              </select>
            </div>
            
            <div className="estimator-group">
              <label htmlFor="material">Matériau</label>
              <select 
                id="material" 
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="pierre">Pierre / Brique</option>
                <option value="bois">Bois</option>
                <option value="metal">Métal</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            
            <div className="estimator-group">
              <label htmlFor="size">Surface approximative (m²)</label>
              <input 
                type="range" 
                id="size" 
                min="1" 
                max="100" 
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="range-slider"
              />
              <div className="range-value">{size} m²</div>
            </div>
            
            <div className="estimator-group">
              <label htmlFor="complexity">Complexité du travail</label>
              <div className="complexity-options">
                <button 
                  type="button"
                  className={`complexity-option ${complexity === 'simple' ? 'active' : ''}`}
                  onClick={() => setComplexity('simple')}
                >
                  Simple
                </button>
                <button 
                  type="button"
                  className={`complexity-option ${complexity === 'moyen' ? 'active' : ''}`}
                  onClick={() => setComplexity('moyen')}
                >
                  Moyen
                </button>
                <button 
                  type="button"
                  className={`complexity-option ${complexity === 'complexe' ? 'active' : ''}`}
                  onClick={() => setComplexity('complexe')}
                >
                  Complexe
                </button>
              </div>
            </div>
            
            <div className="estimator-group">
              <label htmlFor="distance">Distance de votre lieu (km)</label>
              <input 
                type="range" 
                id="distance" 
                min="0" 
                max="100" 
                value={distance}
                onChange={(e) => setDistance(parseInt(e.target.value))}
                className="range-slider"
              />
              <div className="range-value">{distance} km</div>
            </div>
          </div>
          
          <div className="estimator-actions">
            <button type="submit" className="btn-estimate">
              Estimer le coût
            </button>
            <button type="button" className="btn-reset" onClick={handleReset}>
              Réinitialiser
            </button>
          </div>
        </form>
        
        {showEstimate && estimate && (
          <div className="estimate-result">
            <div className="estimate-header">
              <h4>Estimation de coût</h4>
              <button 
                className="close-estimate" 
                onClick={() => setShowEstimate(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="estimate-content">
              <div className="estimate-price">
                <span className="price-range">
                  {estimate.min} € - {estimate.max} €
                </span>
                <span className="price-note">Prix estimé TTC</span>
              </div>
              
              <div className="estimate-details">
                <div className="detail-row">
                  <span className="detail-label">Prix au m² :</span>
                  <span className="detail-value">{estimate.pricePerSquareMeter} €</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Surface :</span>
                  <span className="detail-value">{size} m²</span>
                </div>
                {estimate.travelCost > 0 && (
                  <div className="detail-row">
                    <span className="detail-label">Frais de déplacement :</span>
                    <span className="detail-value">{estimate.travelCost} €</span>
                  </div>
                )}
              </div>
              
              <div className="estimate-disclaimer">
                Cette estimation est fournie à titre indicatif uniquement. 
                Pour un devis précis adapté à votre projet, veuillez nous contacter.
              </div>
              
              <div className="estimate-cta">
                <a href="#devis" className="btn-secondary">
                  Demander un devis précis
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostEstimator; 