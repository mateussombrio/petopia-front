import React, { useState } from "react";
import "../styles/Funcionario.css";
import axios from "axios";

const Funcionario = () => {
  const [activeTab, setActiveTab] = useState("register"); // 'register' ou 'delete'
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  // Função genérica para atualizar os inputs de texto
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("LEndo o token")
      const token = localStorage.getItem("token");

      // 2. Verifica se o token existe (opcional, mas boa prática)
      if (!token) {
        alert("Você precisa estar logado como Admin para cadastrar funcionários.");
        return;
      }

      console.log("Passou do token")
      const response = await axios.post(
        "https://petopia-n81j.onrender.com/funcionario",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Funcionário cadastrado com sucesso.");
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      if (error.response) {
        // Mostra a mensagem exata enviada pelo backend
        alert(error.response.data.message || error.response.data || "Erro no servidor ao cadastrar.");
      } else {
        alert("Erro de conexão ou erro desconhecido.");
      }
    }
  };

  return (
    <div className="app-container">
      {/* --- MAIN CONTENT --- */}
      <main className="content-wrapper">
        <div className="page-header">
          <h1>Gerenciamento de Funcionários</h1>
          <p>Cadastre novos funcionários e remova contas existentes.</p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Cadastrar Funcionário
          </button>
          <button
            className={`tab-btn ${activeTab === "delete" ? "active" : ""}`}
            onClick={() => setActiveTab("delete")}
          >
            Excluir Funcionário
          </button>
        </div>

        <div className="tab-divider"></div>

        {/* --- FORMULÁRIO DE CADASTRO --- */}
        {activeTab === "register" && (
          <div className="card register-card">
            <form className="employee-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Digite o nome do funcionário"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite o e-mail do funcionário"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Senha</label>
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="senha"
                      placeholder="Crie uma senha forte"
                      value={formData.senha}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Cadastrar Funcionário
                </button>
              </div>
            </form>
          </div>
        )}

        {/* --- CARD DE EXCLUSÃO --- */}
        {activeTab === "delete" && (
          <div className="card delete-card">
            <h2>Excluir Funcionário</h2>
            <p className="delete-desc">
              Insira o ID ou e-mail do funcionário que deseja remover. Esta ação
              não pode ser desfeita.
            </p>

            <div className="input-group">
              <label>ID ou E-mail do Funcionário</label>
              <div className="delete-row">
                <input
                  type="text"
                  placeholder="ex: 12345 ou funcionario@email.com"
                />
                <button type="button" className="btn-danger">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Excluir
                </button>
              </div>
            </div>

            <p className="danger-text">Atenção: Esta ação é irreversível.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Funcionario;
