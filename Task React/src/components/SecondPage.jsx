import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div>
      <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px', paddingTop: '60px' }}>
        <div className="w3-container w3-padding-32">
          <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">Our Services & Gallery</h1>
          <p>Welcome to our detailed project overview. Here we showcase our special architectural designs and interior concepts.</p>
        </div>
      </header>

      <main className="w3-content w3-padding" style={{ maxWidth: '1500px' }}>
        
        <div className="w3-row-padding">
          <div className="w3-col l4 m6 w3-margin-bottom">
            <div className="w3-container w3-light-grey w3-padding-24">
              <h3>01. Planning</h3>
              <p>We create efficient and sustainable spatial planning blueprints for modern living environments.</p>
            </div>
          </div>
          
          <div className="w3-col l4 m6 w3-margin-bottom">
            <div className="w3-container w3-light-grey w3-padding-24">
              <h3>02. Interior Design</h3>
              <p>Custom interior styling and material selection tailored to match your personal aesthetic goals.</p>
            </div>
          </div>
          
          <div className="w3-col l4 m12 w3-margin-bottom">
            <div className="w3-container w3-light-grey w3-padding-24">
              <h3>03. Construction</h3>
              <p>Full-scale construction management ensuring safety, quality, and precision at every step.</p>
            </div>
          </div>
        </div>

        <div className="w3-container w3-padding-32">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Concept Renderings</h3>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l6 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Ultra Modern Concept</div>
              <img src="https://www.w3schools.com/w3images/house5.jpg" alt="House" style={{ width: '100%' }} />
            </div>
          </div>
          
          <div className="w3-col l6 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Minimalist Living</div>
              <img src="https://www.w3schools.com/w3images/house2.jpg" alt="House" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <div className="w3-container w3-center w3-padding-64">
          <Link to="/" className="w3-button w3-black w3-padding-large w3-hover-dark-grey" style={{ textDecoration: 'none' }}>
            ← Back to Main Page
          </Link>
        </div>

      </main>

      <footer className="w3-center w3-black w3-padding-16">
        <p>Powered by W3.CSS Architectural Concept</p>
      </footer>
    </div>
  );
}

export default SecondPage;