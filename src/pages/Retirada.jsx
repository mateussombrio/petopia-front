import React, { useState } from 'react';
import '../styles/Retirada.css';

const Retirada = () => {
  const [copied, setCopied] = useState(false);
  const orderCode = "#PET-1A2B3C4D";

  const handleCopy = () => {
    navigator.clipboard.writeText(orderCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-wrapper">
      {/* --- HEADER --- */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            {/* Logo Icon */}
            <div className="logo-icon">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
               </svg>
            </div>
            <span className="logo-text">PetAdopt</span>
          </div>

          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#adopt" className="active">Adopt</a>
            <a href="#about">About Us</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="header-actions">
            <button className="btn-my-account">My Account</button>
            <div className="user-avatar">
               <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        
        {/* --- PAGE TITLE --- */}
        <div className='adoption_title_div'>
          <h1>Your Adoption Order</h1>
          <p>Obrigado por dar a esse animal um lar. Por favor, revise os detalhes abaixo.</p>
        </div>

        {/* --- ORDER CODE --- */}
        <div className="order-code-row">
          <span className="code-label">Order Code: <strong>{orderCode}</strong></span>
          <button className="btn-copy" onClick={handleCopy} title="Copy Code">
            {copied ? (
                <span className="copied-text">Copied!</span>
            ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            )}
          </button>
        </div>

        {/* --- DEADLINE ALERT --- */}
        <div className="alert-box">
            <div className="alert-content">
                <div className="icon-circle-orange">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
                <span>Pickup Deadline: Friday, October 27, 2023, by 5:00 PM</span>
            </div>
            <button className="btn-print" onClick={() => window.print()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print this Page
            </button>
        </div>

        {/* --- MAIN PET CARD --- */}
        <div className="card pet-summary-card">
            <div className="pet-image-wrapper">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Buddy" />
            </div>
            <div className="pet-details">
                <h2>Buddy</h2>
                <p className="pet-subtitle">Golden Retriever, 2 years old, Male</p>
                <div className="action-buttons">
                    <button className="btn-primary">View Full Animal Profile</button>
                    <button className="btn-secondary">Contact Support</button>
                </div>
            </div>
        </div>

        {/* --- BOTTOM GRID (LOCATION & NEXT STEPS) --- */}
        <div className="grid-two-columns">
            
            {/* Location Card */}
            <div className="card info-card">
                <h3>Pickup Location</h3>
                <div className="location-content">
                    <div className="pin-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div className="location-text">
                        <h4>Happy Paws Shelter</h4>
                        <p>123 Animal Lover Lane, Petville, PV 54321</p>
                        <p className="hours">Hours: 9:00 AM - 5:00 PM Daily</p>
                        <a href="#" className="link-map">View on Map</a>
                    </div>
                </div>
            </div>

            {/* Next Steps Card */}
            <div className="card info-card">
                <h3>Next Steps</h3>
                <ul className="steps-list">
                    <li>
                        <span className="check-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span>Bring a valid photo ID and a copy of this order confirmation (digital or printed).</span>
                    </li>
                    <li>
                        <span className="check-icon">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span>Prepare a pet carrier for safe transportation.</span>
                    </li>
                    <li>
                        <span className="check-icon">
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        <span>Arrive within the pickup window to complete the paperwork.</span>
                    </li>
                </ul>
            </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
            <p>© 2024 PetAdopt. All rights reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Help Center</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Retirada;