import { useState } from 'react';
import '../styles/EstimatorPage.css';
import CostEstimator from '../components/CostEstimator';

const EstimatorPage = () => {
  return (
    <div className="estimator-page">
      <header className="estimator-header">
        <div className="container header-container">
          <a href="/" className="back-to-home">
            <i className="fas fa-arrow-left"></i> Retour à l'accueil
          </a>
          <div className="header-cta">
            <a href="/#devis" className="btn btn-primary">DEMANDER UN DEVIS</a>
          </div>
        </div>
      </header>

      <main className="estimator-main">
        <div className="container">
          <div className="estimator-intro">
            <h1 className="page-title">Estimation de Coût d'Aérogommage</h1>
            <p className="page-description">
              Utilisez notre outil interactif ci-dessous pour obtenir une estimation approximative du coût de vos travaux d'aérogommage.
              Cette estimation est fournie à titre indicatif uniquement et les prix définitifs ne peuvent être établis qu'après une étude précise
              par nos experts. Pour un devis personnalisé, <a href="/#devis">contactez-nous</a>.
            </p>
          </div>

          <CostEstimator />

          <div className="estimator-info">
            <div className="info-wrapper">
              <div className="info-column">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div className="info-content">
                    <h3>Qu'est-ce que l'aérogommage?</h3>
                    <p>
                      L'aérogommage est une technique de nettoyage et décapage non abrasive utilisant des minéraux naturels propulsés à basse pression. 
                      Cette méthode respectueuse de l'environnement permet de nettoyer et restaurer différentes surfaces sans les endommager.
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-column">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-tags"></i>
                  </div>
                  <div className="info-content">
                    <h3>Facteurs influençant le prix</h3>
                    <ul className="factors-list">
                      <li>Type et état de la surface à traiter</li>
                      <li>Accessibilité du chantier</li>
                      <li>Présence de contaminants spécifiques</li>
                      <li>Niveau de finition requis</li>
                      <li>Distance de déplacement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Besoin d'un devis précis pour votre projet?</h2>
            <p>
              Pour une estimation professionnelle tenant compte de tous les aspects de votre projet,
              nous vous invitons à nous contacter directement. Notre équipe peut également vous conseiller
              sur les meilleures solutions pour votre cas particulier.
            </p>
            <div className="cta-buttons">
              <a href="/#devis" className="btn btn-primary">Demander un devis gratuit</a>
              <a href="/" className="btn btn-outline">Retour à l'accueil</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="estimator-footer">
        <div className="container">
          <p>© 2023 Services d'Aérogommage Professionnel. Tous droits réservés.</p>
          <p className="disclaimer">Les estimations fournies sont approximatives et ne constituent pas un engagement contractuel.</p>
        </div>
      </footer>
    </div>
  );
};

export default EstimatorPage; 