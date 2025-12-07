import React from 'react';
import '../styles/Adocao.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdoptionPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [adotante, setAdotante] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os dados do animal específico pelo ID
    axios
      .get(`http://localhost:3000/animal/${id}`)
      .then((response) => {
        setAnimal(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const carregarAdotante = async () => {
      try {
        // A. Recupera os dados salvos no Login
        const userString = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (!userString || !token) {
          alert("Você precisa estar logado para adotar!");
          return;
        }

        const usuarioLogado = JSON.parse(userString);
        
        const response = await axios.get(`http://localhost:3000/adotante/${usuarioLogado.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        setAdotante(response.data);
        setLoading(false);
        
      } catch (error) {
        console.error("Erro ao buscar adotante:", error);
        setLoading(false);
      }
    };

    carregarAdotante();
  }, []); // Array vazio: Executa só uma vez ao carregar a tela

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

  if(!adotante)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Adotante não encontrado.
      </div>
    );

  return (
    <div className="page-wrapper">
      <main className="container">
        <h1 className="page-title">Complete Seu Pedido de Doação</h1>

        {/* --- CARD DO ANIMAL --- */}
        <section className="pet-card">
          <div className="pet-image-container">
            {/* Imagem similar a um gato na neve */}
            <img 
              src={animal.foto} 
              alt={animal.nome} 
              className="pet-image"
            />
          </div>
          <div className="pet-info">
            <h2>{animal.nome}</h2>
            <div className="tags">
              <span className="tag">Gosta de brincar</span>
              <span className="tag">{animal.idade} anos de idade</span>
              <span className="tag">{animal.genero}</span>
            </div>
            <p className="pet-description">
              Você está a um passo de levar esse bichinho para casa. 
              Confirme suas informações abaixo e clique em Adotar. 
              Caso não tenha uma conta, crie e faça as etapas de adoção novamente.
            </p>
          </div>
        </section>

        {/* --- FORMULÁRIO E INFO LATERAL --- */}
        <div className="bottom-section">
          
          {/* Lado Esquerdo: Formulário */}
          <div className="form-column">
            <h3>Confirme suas informações</h3>
            
            <form>
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" value={adotante.nome} onChange={(e) => setAdotante({...adotante, nome: e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Endereço</label>
                <input type="text" value={adotante.endereco} onChange={(e) => setAdotante({...adotante, endereco: e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" value={adotante.email} onChange={(e) => setAdotante({...adotante, email: e.target.value})}/>
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" value={adotante.contato} onChange={(e) => setAdotante({...adotante, telefone: e.target.value})}/>
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  Eu concordo com os <a href="#">termos e condições de adoção</a>.
                  Isso inclui a compreensão das responsabilidades e cuidados com o animal.
                </label>
              </div>

              <button className="btn-adopt" onClick={ () => navigate(`/retirada/${id}`)}>Confirmar Adoção</button>
            </form>
          </div>

          {/* Lado Direito: Info Box Amarelo */}
          <aside className="info-column">
            <div className="info-card">
              <h4>E agora?</h4>
              <p className="info-intro">
                Nossa equipe irá receber seu pedido de adoção e analisá-lo conforme nossa política de adoção.
              </p>

              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <strong>Análise do Pedido</strong>
                  <p>Seu pedido de adoção será analisado pela nossa equipe.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <strong>Retirada do Animal</strong>
                  <p>Será criado um código do pedido e um prazo para a retirada do animal. Leve um documento de identificação, caso ao contrário, a retirada não será realizada.</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default AdoptionPage;