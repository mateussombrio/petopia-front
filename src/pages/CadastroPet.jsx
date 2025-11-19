import React, { useState } from 'react';
import '../styles/CadastroPet.css';

const CadastroPet = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="page-wrapper">
      
      {/* --- HEADER --- */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 5v14l11-7z" /> {/* Ícone estilo Play simples */}
              </svg>
            </div>
            <span>PetAdopt</span>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#adopt">Adopt</a>
            <a href="#about">About Us</a>
            <a href="#donate">Donate</a>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        <div className="form-header">
          <h1>Add a New Animal for Adoption</h1>
          <p>Please fill in the details below to create a profile for our new arrival.</p>
        </div>

        <form className="animal-form">
          
          {/* SECTION: ANIMAL DETAILS */}
          <div className="form-section">
            <h3>Animal Details</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Animal Name</label>
              <input type="text" placeholder="Enter the animal's name" />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Breed</label>
                <input type="text" placeholder="e.g., Golden Retriever" />
              </div>
              <div className="input-group">
                <label>Age</label>
                <input type="text" placeholder="e.g., 2 years" />
              </div>
            </div>

            <div className="input-group">
              <label>Gender</label>
              <div className="gender-options">
                {['Male', 'Female', 'Unknown'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    className={`gender-btn ${selectedGender === gender ? 'active' : ''}`}
                    onClick={() => handleGenderSelect(gender)}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION: HEALTH & PHOTO */}
          <div className="form-section">
            <h3>Health & Photo</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Health Status</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Good</option>
                  <option value="good">Good</option>
                  <option value="needs-attention">Needs Attention</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Photo</label>
              <div className="upload-area">
                <div className="upload-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <p><strong>Click to upload</strong> or drag and drop</p>
                  <span className="upload-hint">SVG, PNG, JPG (MAX. 5MB)</span>
                </div>
                <input type="file" className="file-input-hidden" />
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="form-actions">
            <button type="submit" className="btn-submit">Submit Animal Profile</button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default CadastroPet;