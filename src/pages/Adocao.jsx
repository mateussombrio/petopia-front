import React from 'react';
import '../styles/Adocao.css';

const AdoptionPage = () => {
  return (
    <div className="page-wrapper">
      <main className="container">
        <h1 className="page-title">Complete Seu Pedido de Doação</h1>

        {/* --- CARD DO ANIMAL --- */}
        <section className="pet-card">
          <div className="pet-image-container">
            {/* Imagem similar a um gato na neve */}
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gato Buddy" 
              className="pet-image"
            />
          </div>
          <div className="pet-info">
            <h2>Buddy</h2>
            <div className="tags">
              <span className="tag">Gosta de brincar</span>
              <span className="tag">1 ano de idade</span>
              <span className="tag">Macho</span>
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
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Endereço</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" />
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  Eu concordo com os <a href="#">termos e condições de adoção</a>.
                  Isso inclui a compreensão das responsabilidades e cuidados com o animal.
                </label>
              </div>

              <button type="button" className="btn-adopt">Adotar</button>
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