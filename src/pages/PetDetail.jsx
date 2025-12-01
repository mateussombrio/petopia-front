import React, { useState, useEffect } from "react";
import "../styles/PetDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetail = () => {
  const { id } = useParams(); // Pega o número que veio na URL (ex: /detalhes/5)
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os dados do animal específico pelo ID
    axios
      .get(`https://petopia-n81j.onrender.com/animal/${id}`)
      .then((response) => {
        setAnimal(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Carregando...
      </div>
    );
  if (!animal)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Animal não encontrado.
      </div>
    );

  return (
    <div className="page-wrapper">
      <main className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span> / <span>Dogs</span> /{" "}
          <span className="current">{animal.nome}</span>
        </div>

        <div className="content-grid">
          {/* --- COLUNA ESQUERDA (IMAGENS) --- */}
          <div className="left-column">
            <div className="main-image-container">
              <img src={animal.foto} alt="Buddy" className="main-image" />
            </div>
          </div>

          {/* --- COLUNA DIREITA (INFO) --- */}
          <div className="right-column">
            <div className="title-section">
              <div>
                <h1>{animal.nome}</h1>
                <p className="subtitle">
                  {animal.raca} | {animal.idade} ano/anos | {animal.genero}
                </p>
              </div>
              <div className="location-badge">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Florianópolis, SC
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="quick-facts-card">
              <h3>Quick Facts</h3>
              <div className="facts-grid">
                <div className="fact-item">
                  <span className="icon">🐾</span>
                  <span>Raça: {animal.raca}</span>
                </div>
                <div className="fact-item">
                  <span className="icon">🎂</span>
                  <span>Idade: {animal.idade}</span>
                </div>
                <div className="fact-item">
                  <span className="icon">♂️</span>
                  <span>Gênero: {animal.genero}</span>
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
                  <span>{animal.status_saude}</span>
                </div>
              </div>
            </div>

            <div className="text-section">
              <h3>About Me</h3>
              <p>
                Buddy is a bundle of joy with a heart full of love. He was found
                as a stray but has quickly adapted to home life. He adores long
                walks in the park, playing fetch for hours, and ending the day
                with a good cuddle on the sofa. He's a quick learner and already
                knows 'sit' and 'stay'. Buddy would thrive in an active home
                where he can get plenty of exercise and attention.
              </p>
            </div>

            <div className="text-section">
              <h3>Health & Needs</h3>
              <p>
                Buddy is in excellent health, fully vaccinated, and neutered. He
                has no known allergies or special dietary needs. He would
                benefit from a home with a fenced yard to safely burn off his
                energy.
              </p>
            </div>

            <button className="btn-inquire">Adotar</button>

            <div className="share-row">
              <button className="btn-share-main">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  ></path>
                </svg>
                Share
              </button>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  FB
                </a>
                <a href="#" className="social-icon">
                  TW
                </a>
                <a href="#" className="social-icon">
                  🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetDetail;
