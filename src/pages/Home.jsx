import { useEffect } from "react";
import React, { useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const [busca, setBusca] = useState("");

  const [animais, setAnimais] = useState([]);

  const nagivate = useNavigate();

  useEffect(() => {
    // Com Axios é mais direto:
    axios
      .get("https://petopia-n81j.onrender.com/animal")
      .then((response) => {
        // O Axios coloca os dados dentro de "response.data"
        setAnimais(response.data);
        setAnimais(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar animais:", error);
      });
  }, []);


  const animaisFiltrados = animais.filter((animal) => {
    const termo = busca.toLowerCase();
    return (
      animal.nome.toLowerCase().includes(termo) ||
      animal.nome.toLowerCase().includes(termo) ||
      animal.raca.toLowerCase().includes(termo)
    );
  });

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
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#999"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </div>
                <button className="btn-search">Pesquisar</button>
              </div>
            </div>
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
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#999"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </div>
                <button className="btn-search">Pesquisar</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- GRID DE ANIMAIS (Renderizando dados variados) --- */}
        <section className="animals-section">
          <h2>Animais para Adoção</h2>


          <div className="animals-grid">
            {animaisFiltrados.length > 0 ? (
              animaisFiltrados.map((animal) => (
                <div
                  key={animal.id}
                  className="animal-card"
                  onClick={() => nagivate(`/animais/${animal.id}`)}
                  style={{ cursor: "pointer" }}
                >
                <div
                  key={animal.id}
                  className="animal-card"
                  onClick={() => nagivate(`/animais/${animal.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-image">
                    <img src={animal.foto} alt={animal.nome} />
                  </div>
                  <div className="card-info">
                    <h3>{animal.nome}</h3>
                    <p>
                      {animal.raca}, {animal.idade} ano/anos
                    </p>
                  </div>
                </div>
                </div>
              ))
            ) : (
              /* Opcional: Mensagem caso nenhum animal seja encontrado */
              <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                Nenhum animal encontrado com esse nome ou raça.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

