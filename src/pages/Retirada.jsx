import React, { useState } from "react";
import "../styles/Retirada.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Retirada = () => {
  const {id} = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const orderCode = "#PET-1A2B3C4D";

  const handleCopy = () => {
    navigator.clipboard.writeText(orderCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prazoRetirada = () => {
    const data = new Date();
    data.setDate(data.getDate() + 3);

    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

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
        {/* --- PAGE TITLE --- */}
        <div className="adoption_title_div">
          <h1>Seu pedido de Adoção</h1>
          <p>
            Obrigado por dar a esse animal um lar. Por favor, revise os detalhes
            abaixo.
          </p>
        </div>

        {/* --- ORDER CODE --- */}
        <div className="order-code-row">
          <span className="code-label">
            Código do Pedido: <strong>{orderCode}</strong>
          </span>
          <button className="btn-copy" onClick={handleCopy} title="Copy Code">
            {copied ? (
              <span className="copied-text">Copiado!</span>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span style={{ textTransform: "capitalize" }}>
              Prazo para retirada: {prazoRetirada()}, até 17:00
            </span>
          </div>
          <button className="btn-print" onClick={() => window.print()}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
            <img
              src={animal.foto}
              alt={animal.nome}
            />
          </div>
          <div className="pet-details">
            <h2>{animal.nome}</h2>
            <p className="pet-subtitle">{animal.raca}, {animal.idade}, {animal.genero}</p>
            <div className="action-buttons">
              <button className="btn-primary">Perfil do Animal</button>
              <button className="btn-secondary">Contate o suporte</button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM GRID (LOCATION & NEXT STEPS) --- */}
        <div className="grid-two-columns">
          {/* Location Card */}
          <div className="card info-card">
            <h3>Local de Retirada</h3>
            <div className="location-content">
              <div className="pin-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="location-text">
                <h4>Abrigo das Patinhas Felizes</h4>
                <p>Rua dos Animais, Petville, 88888-888</p>
                <p className="hours">Horário: 9:00 - 17:00, Segunda à Sábado</p>
                <a href="#" className="link-map">
                  Veja no Maps
                </a>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="card info-card">
            <h3>Próximos Passos</h3>
            <ul className="steps-list">
              <li>
                <span className="check-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>
                  Traga um documento de identidade com foto e o código do
                  pedido.
                </span>
              </li>

              <li>
                <span className="check-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Chegue dentro do horário de retirada.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Retirada;
