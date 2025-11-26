import React, { useState } from 'react';
import '../styles/CadastroPet.css';

const CadastroPet = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="page-wrapper">
    
      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        <div className="form-header">
          <h1>Cadastre um novo animal para ser adotado</h1>
          <p>Preencha os campos abaixo para cadastrar o animal</p>
        </div>

        <form className="animal-form">
          
          {/* SECTION: ANIMAL DETAILS */}
          <div className="form-section">
            <h3>Detalhes do Animal</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Enter the animal's name" />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Raça</label>
                <input type="text" placeholder="e.g., Golden Retriever" />
              </div>
              <div className="input-group">
                <label>Idade</label>
                <input type="text" placeholder="e.g., 2 years" />
              </div>
            </div>

            <div className="input-group">
              <label>Gênero</label>
              <div className="gender-options">
                {['Macho', 'Fêmea'].map((gender) => (
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
            <h3>Saúde e Foto</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Status de Saúde</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Saudável</option>
                  <option value="good">Saudável</option>
                  <option value="needs-attention">Precisa de Atenção</option>
                  <option value="critical">Crítico</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Foto</label>
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
            <button type="submit" className="btn-submit">Cadastrar Animal</button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default CadastroPet;