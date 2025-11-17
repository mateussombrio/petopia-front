import React from 'react';
import '../loginCadastro.css' // Importando o CSS abaixo

const loginCadastro = () => {
  return (
    <div className="container">
      {/* Lado Esquerdo - Login */}
      <div className="panel left-panel">
        <div className="logo">
          <span className="paw-icon">🐾</span> Petopia
        </div>

        <div className="login-content">
          <h1>Bem-vindo!</h1>
          <p className="subtitle">Entre com seus dados para fazer o login</p>

          <form className="form-login">
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

            <button type="button" className="btn-login">Login</button>
          </form>
        </div>
      </div>

      {/* Lado Direito - Cadastro */}
      <div className="panel right-panel">
        <div className="register-content">
          <h1>Crie uma conta</h1>
          <p className="subtitle-white">E Encontre seu amigo de 4 patas.</p>

          <form className="form-register">
            <div className="input-group-dark">
              <label>Nome Completo</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>

            <div className="input-group-dark">
              <label>Email</label>
              <input type="email" placeholder="seuemail@exemplo.com" />
            </div>

            <div className="input-group-dark">
              <label>Endereço</label>
              {/* Nota: No design original o placeholder dizia "Digite sua senha", corrigi para endereço */}
              <input type="text" placeholder="Digite seu endereço" />
            </div>

            <div className="row">
              <div className="input-group-dark half-width">
                <label>CEP</label>
                <input type="text" placeholder="Digite seu CEP" />
              </div>
              <div className="input-group-dark half-width">
                <label>Telefone</label>
                <input type="text" placeholder="Digite seu telefone" />
              </div>
            </div>

            <div className="input-group-dark">
              <label>Senha</label>
              <input type="password" placeholder="Confirme sua senha" />
            </div>

            <button type="button" className="btn-register">Criar conta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default loginCadastro;