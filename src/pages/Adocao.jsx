import React from 'react';
import '../Adocao.css';

const AdoptionPage = () => {
  return (
    <div className="page-wrapper">
      {/* --- HEADER --- */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#5c5c5c" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM4 8C2.9 8 2 8.9 2 10C2 11.1 2.9 12 4 12C5.1 12 6 11.1 6 10C6 8.9 5.1 8 4 8ZM20 8C18.9 8 18 8.9 18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10C22 8.9 21.1 8 20 8ZM12 8C9.33 8 7 9.5 5.5 11.8C4.8 12.9 5.5 14.5 6.7 14.9L8 15.3V19C8 20.1 8.9 21 10 21H14C15.1 21 16 20.1 16 19V15.3L17.3 14.9C18.5 14.5 19.2 12.9 18.5 11.8C17 9.5 14.67 8 12 8Z"/>
            </svg>
            <span>Petopia</span>
          </div>
          
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#adopt" className="active">Adopt</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-cta"></div> {/* Botão vazio verde conforme imagem */}
        </div>
      </header>

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

      <footer className="footer">
        <div className="divider"></div>
        <p>@2025 Petopia. Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default AdoptionPage;