import React from 'react';
import '../styles/LoginCadastro.css'; // Certifique-se que o arquivo CSS está na mesma pasta
import '../styles/Footer.css'

const LoginCadastro = () => {
  return (
    <div className="main-wrapper">
      {/* O Card Centralizado (Container Principal) */}
      <div className="auth-card">
        
        {/* Lado Esquerdo - Login (Fundo Branco) */}
        <div className="card-side left-side">
          <div className="content-box">
            <h2>Bem-vindo!</h2>
            <p className="subtitle">Entre com seus dados para fazer o login</p>

            <form>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>

              <div className="input-group">
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
              </div>

              <div className="forgot-password">
                <a href="#forgot">Esqueceu sua senha?</a>
              </div>

              <button type="button" className="btn-primary">Login</button>
            </form>
          </div>
        </div>

        {/* Lado Direito - Cadastro (Fundo Verde) */}
        <div className="card-side right-side">
          <div className="content-box">
            <h2>Crie uma conta</h2>
            <p className="subtitle-white">E Encontre seu amigo de 4 patas.</p>

            <form>
              <div className="input-group-transparent">
                <label>Nome Completo</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>

              <div className="input-group-transparent">
                <label>Email</label>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>

              <div className="input-group-transparent">
                <label>Endereço</label>
                <input type="text" placeholder="Digite sua senha" /> {/* Mantendo fiel à imagem, mesmo parecendo erro de copy no design original */}
              </div>

              <div className="row">
                <div className="input-group-transparent half">
                  <label>CEP</label>
                  <input type="text" placeholder="Digite seu CEP" />
                </div>
                <div className="input-group-transparent half">
                  <label>Telefone</label>
                  <input type="text" placeholder="Digite seu telefone" />
                </div>
              </div>

              <div className="input-group-transparent">
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" />
              </div>

              <button type="button" className="btn-secondary">Criar conta</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Petopia. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Políticas de Privacidade</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Central de Ajuda</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default LoginCadastro;