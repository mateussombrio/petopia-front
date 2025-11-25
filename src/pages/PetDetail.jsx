import React, { useState } from 'react';
import '../styles/PetDetail.css';


const PetDetail = () => {
  // Estado para trocar a imagem principal ao clicar nas miniaturas
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Labrador
  );

  const thumbnails = [
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", // Labrador
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", // Cão dormindo
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", // Beagle
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"  // Outro cão
  ];

  return (
    <div className="page-wrapper">
      
      {/* --- HEADER --- */}
      <header className="header">
        <div className="header-left">
            {/* Ícone simples de pata + Logo */}
            <div className="logo-container">
                <div className="logo-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z"/>
                        <path d="M4 8C2.9 8 2 8.9 2 10C2 11.1 2.9 12 4 12C5.1 12 6 11.1 6 10C6 8.9 5.1 8 4 8Z"/>
                        <path d="M20 8C18.9 8 18 8.9 18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10C22 8.9 21.1 8 20 8Z"/>
                        <path d="M12 8C9.33 8 7 9.5 5.5 11.8C4.8 12.9 5.5 14.5 6.7 14.9L8 15.3V19C8 20.1 8.9 21 10 21H14C15.1 21 16 20.1 16 19V15.3L17.3 14.9C18.5 14.5 19.2 12.9 18.5 11.8C17 9.5 14.67 8 12 8Z"/>
                    </svg>
                </div>
                <span className="logo-text">PetAdopt</span>
            </div>
        </div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#dogs" className="active">Dogs</a>
          <a href="#cats">Cats</a>
          <a href="#about">About Us</a>
        </nav>

        <div className="header-right">
            <button className="btn-donate">Donate</button>
            <div className="user-avatar">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
            </div>
        </div>
      </header>

      <main className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
            <span>Home</span> / <span>Dogs</span> / <span className="current">Buddy</span>
        </div>

        <div className="content-grid">
            
            {/* --- COLUNA ESQUERDA (IMAGENS) --- */}
            <div className="left-column">
                <div className="main-image-container">
                    <img src={mainImage} alt="Buddy" className="main-image" />
                </div>
                <div className="thumbnails-row">
                    {thumbnails.map((thumb, index) => (
                        <div 
                            key={index} 
                            className={`thumb-container ${mainImage === thumb ? 'active' : ''}`}
                            onClick={() => setMainImage(thumb)}
                        >
                            <img src={thumb} alt={`Thumb ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- COLUNA DIREITA (INFO) --- */}
            <div className="right-column">
                
                <div className="title-section">
                    <div>
                        <h1>Buddy</h1>
                        <p className="subtitle">Labrador Mix | 2 years old | Male</p>
                    </div>
                    <div className="location-badge">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Florianópolis, SC
                    </div>
                </div>

                {/* Quick Facts Card */}
                <div className="quick-facts-card">
                    <h3>Quick Facts</h3>
                    <div className="facts-grid">
                        <div className="fact-item">
                            <span className="icon">🐾</span>
                            <span>Raça: Labrador Mix</span>
                        </div>
                        <div className="fact-item">
                            <span className="icon">🎂</span>
                            <span>Idade: 2 years</span>
                        </div>
                        <div className="fact-item">
                            <span className="icon">♂️</span>
                            <span>Gênero: Male</span>
                        </div>
                        <div className="fact-item">
                            <span className="icon">📏</span>
                            <span>Tamanho: Medium (55 lbs)</span>
                        </div>
                        <div className="fact-item">
                            <span className="icon">❤️</span>
                            <span>Carinhoso com crianças</span>
                        </div>
                        <div className="fact-item">
                            <span className="icon">💉</span>
                            <span>Vacinado</span>
                        </div>
                    </div>
                </div>

                <div className="text-section">
                    <h3>About Me</h3>
                    <p>
                        Buddy is a bundle of joy with a heart full of love. He was found as a stray but has quickly adapted to home life. He adores long walks in the park, playing fetch for hours, and ending the day with a good cuddle on the sofa. He's a quick learner and already knows 'sit' and 'stay'. Buddy would thrive in an active home where he can get plenty of exercise and attention.
                    </p>
                </div>

                <div className="text-section">
                    <h3>Health & Needs</h3>
                    <p>
                        Buddy is in excellent health, fully vaccinated, and neutered. He has no known allergies or special dietary needs. He would benefit from a home with a fenced yard to safely burn off his energy.
                    </p>
                </div>

                <button className="btn-inquire">Adotar</button>

                <div className="share-row">
                    <button className="btn-share-main">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                        Share
                    </button>
                    <div className="social-icons">
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">TW</a>
                        <a href="#" className="social-icon">🔗</a>
                    </div>
                </div>

                <div className="shelter-info">
                    <div className="shelter-logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="Shelter Logo" />
                    </div>
                    <div className="shelter-details">
                        <h4>Sunny Paws Rescue</h4>
                        <p>123 Adoption Lane, Sunnyville, CA</p>
                        <a href="#">Visit their website</a>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};

export default PetDetail;