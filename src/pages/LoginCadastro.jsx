import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/LoginCadastro.css'; // Certifique-se que o arquivo CSS está na mesma pasta
import '../styles/Footer.css'

const LoginCadastro = () => {

  // --- Estados para armazenar os dados ---
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });

  const [cadastroData, setCadastroData] = useState({
    nome: '',
    email: '',
    endereco: '',
    cep: '',
    contato: '',
    senha: ''
  });

  // --- Captura de dados dos inputs ---
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleCadastroChange = (e) => {
    setCadastroData({ ...cadastroData, [e.target.name]: e.target.value });
  };

  // --- Login com Axios ---
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Axios envia o objeto loginData diretamente como JSON
      const response = await axios.post('https://petopia-n81j.onrender.com/login', loginData);

      // Se chegou aqui, deu sucesso (status 2xx)
      alert(response.data.message || 'Login realizado!');
      
      // Salvando token e user (ajuste conforme a resposta do seu LoginController)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirecionar usuário (exemplo)
      window.location.href = '/'; 

    } catch (error) {
      // Axios captura o erro aqui. Verificamos se há resposta do backend
      if (error.response) {
        alert(error.response.data.message || error.response.data || 'Erro ao logar.');
      } else {
        alert('Erro de conexão com o servidor.');
      }
      console.error('Erro no login:', error);
    }
  };

  // --- Cadastro com Axios ---
  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      // Preparando os dados para bater com o AdotanteController
      const payload = {
        nome: cadastroData.nome,
        email: cadastroData.email,
        contato: cadastroData.contato,
        // Concatenando endereço e CEP pois o Controller espera apenas 'endereco'
        endereco: `${cadastroData.endereco} - CEP: ${cadastroData.cep}`, 
        senha: cadastroData.senha
      };

      const response = await axios.post('https://petopia-n81j.onrender.com/adotante', payload);

      alert(response.data || 'Conta criada com sucesso! Faça login.');
      // Limpar formulário
      setCadastroData({ nome: '', email: '', endereco: '', cep: '', contato: '', senha: '' });

    } catch (error) {
      if (error.response) {
        // Exibe a mensagem de erro que vem do backend (ex: "Preencha todos os campos")
        alert(error.response.data.message || error.response.data || 'Erro ao cadastrar.');
      } else {
        alert('Erro de conexão com o servidor.');
      }
      console.error('Erro no cadastro:', error);
    }
  };


  return (
    <div className="main-wrapper">
      {/* O Card Centralizado (Container Principal) */}
      <div className="auth-card">
        
        {/* Lado Esquerdo - Login (Fundo Branco) */}
        <div className="card-side left-side">
          <div className="content-box">
            <h2>Bem-vindo!</h2>
            <p className="subtitle">Entre com seus dados para fazer o login</p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name='email' placeholder="seuemail@exemplo.com" value={loginData.email} onChange={handleLoginChange} required/>
              </div>

              <div className="input-group">
                <label>Senha</label>
                <input type="password" name='senha' placeholder="Digite sua senha" value={loginData.senha} onChange={handleLoginChange} required/>
              </div>

              <div className="forgot-password">
                <a href="#forgot">Esqueceu sua senha?</a>
              </div>

              <button type="submit" className="btn-primary">Login</button>
            </form>
          </div>
        </div>

        {/* Lado Direito - Cadastro (Fundo Verde) */}
        <div className="card-side right-side">
          <div className="content-box">
            <h2>Crie uma conta</h2>
            <p className="subtitle-white">E Encontre seu amigo de 4 patas.</p>

            <form onSubmit={handleCadastro}>
              <div className="input-group-transparent">
                <label>Nome Completo</label>
                <input type="text" name='nome' placeholder="Digite seu nome" value={cadastroData.nome} onChange={handleCadastroChange} required/>
              </div>

              <div className="input-group-transparent">
                <label>Email</label>
                <input type="email" name='email' placeholder="seuemail@exemplo.com" value={cadastroData.email} onChange={handleCadastroChange} required/>
              </div>

              <div className="input-group-transparent">
                <label>Endereço</label>
                <input type="text" name='endereco' placeholder="Digite sua senha" value={cadastroData.endereco} onChange={handleCadastroChange} required/>
              </div>

              <div className="row">
                <div className="input-group-transparent half">
                  <label>CEP</label>
                  <input type="text" name='cep' placeholder="Digite seu CEP" value={cadastroData.cep} onChange={handleCadastroChange} required/>
                </div>
                <div className="input-group-transparent half">
                  <label>Telefone</label>
                  <input type="text" name='contato' placeholder="Digite seu telefone" value={cadastroData.contato} onChange={handleCadastroChange} required/>
                </div>
              </div>

              <div className="input-group-transparent">
                <label>Senha</label>
                <input type="password" name='senha' placeholder="Digite sua senha" value={cadastroData.senha} onChange={handleCadastroChange} required/>
              </div>

              <button type="submit" className="btn-secondary">Criar conta</button>
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