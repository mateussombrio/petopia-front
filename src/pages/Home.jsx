import React from 'react';
import '../styles/Home.css';

const HomePage = () => {
  // --- DADOS REAIS/VARIADOS PARA OS CARDS ---
  const animals = [
    {
      id: 1,
      name: 'Alan',
      breed: 'Jack Russell Mix',
      age: '2 anos',
      // Imagem original do design
      image: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
    },
    {
      id: 2,
      name: 'Bella',
      breed: 'Golden Retriever',
      age: '6 meses',
      image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Charlie',
      breed: 'Bulldog Francês',
      age: '3 anos',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Max',
      breed: 'Pastor Alemão',
      age: '1 ano',
      image: 'https://images.unsplash.com/photo-1589924691169-a3e8c6ab19f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Lucy',
      breed: 'Corgi Pembroke',
      age: '4 anos',
      image: 'https://images.unsplash.com/photo-1612536053345-bb776757619d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Cooper',
      breed: 'Labrador Retriever',
      age: '2 anos',
      image: 'https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Luna',
      breed: 'Husky Siberiano',
      age: '5 anos',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Buddy',
      breed: 'Beagle',
      age: '1 ano',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="page-wrapper">

      <main className="main-content">
        
        {/* --- HERO SECTION (Sem alterações) --- */}
        <section className="hero">
          <div className="hero-image-wrapper">
             <img 
               src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
               alt="Filhotes" 
               className="hero-img"
             />
             <div className="hero-overlay"></div>
             
             <div className="hero-content">
               <h1>Encontre seu Melhor Amigo</h1>
               
               <div className="search-bar">
                 <div className="search-input-group">
                   <svg width="20" height="20" fill="none" stroke="#999" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="11" cy="11" r="8"></circle>
                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                   </svg>
                   <input type="text" placeholder="Digite aqui" />
                 </div>
                 <button className="btn-search">Pesquisar</button>
               </div>
             </div>
          </div>

          <div className="filters-container">
            <div className="filter-dropdown">
              <span>Animal Type</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div className="filter-dropdown">
              <span>Idade</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
        </section>

        {/* --- GRID DE ANIMAIS (Renderizando dados variados) --- */}
        <section className="animals-section">
          <h2>Animais para Adoção</h2>
          
          <div className="animals-grid">
            {/* O map agora itera sobre os dados únicos de cada animal */}
            {animals.map((animal) => (
              <div key={animal.id} className="animal-card">
                <div className="card-image">
                  {/* Usa a imagem específica do objeto animal */}
                  <img src={animal.image} alt={animal.name} />
                </div>
                <div className="card-info">
                  {/* Usa o nome específico */}
                  <h3>{animal.name}</h3>
                  {/* Usa a raça e idade específicas */}
                  <p>{animal.breed}, {animal.age}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER (Sem alterações) --- */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Petopia</h4>
            <p className="footer-desc">
              Encontrando um lar para<br/>
              o seu amigo de quatro<br/>
              patas.
            </p>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Políticas de Privacidade</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>@2025 Petopia. Todos os direitos reservados</p>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;