import React, { useState } from 'react';
import axios from 'axios'; // 1. Importar Axios
import '../styles/Deletar.css';

const Deletar = () => {
  const [activeTab, setActiveTab] = useState('animal');
  
  // 2. Estado para armazenar o ID que o usuário digitar
  const [idBusca, setIdBusca] = useState('');

  const [adotante, setAdotante] = useState('');


  const handleExcluirAdotante = async () => {
   if(!adotante) {
    alert("Por favor, digite o email do adotante.");
    return;
   } 

   const confirmar = window.confirm(`Tem certeza que deseja excluir o adotante de email: ${adotante.email}?`);
   if (!confirmar) return;

   try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`https://petopia-n81j.onrender.com/adotante/${adotante.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 204 || response.status === 200) {
      alert("Adotante excluído com sucesso!");
      setAdotante('');
    }

   } catch (error) {
    console.error("Erro ao excluir:", error);
    if (error.response && error.response.status === 404) {
      alert("Adotante não encontrado. Verifique o email digitado.");
    } else if (error.response && error.response.status === 403) {
      alert("Você não tem permissão para excluir adotantes.");
    } else {
      alert("Erro ao tentar excluir o adotante.");
    }
   }
  }

  // 3. Função para realizar a exclusão
  const handleExcluirAnimal = async () => {
    // Validação simples
    if (!idBusca) {
      alert("Por favor, digite o ID do animal.");
      return;
    }

    // Confirmação de segurança (Boa prática para Deletes)
    const confirmar = window.confirm(`Tem certeza que deseja excluir o animal de ID: ${idBusca}?`);
    if (!confirmar) return;

    try {
      // Recuperar o token para permissão (se sua rota for protegida)
      const token = localStorage.getItem('token');

      const response = await axios.delete(`https://petopia-n81j.onrender.com/animal/${idBusca}`, {
        headers: {
          Authorization: `Bearer ${token}` // Envia o token se necessário
        }
      });

      if (response.status === 204 || response.status === 200) {
        alert("Animal excluído com sucesso!");
        setIdBusca(''); // Limpa o campo
      }

    } catch (error) {
      console.error("Erro ao excluir:", error);
      // Tratamento de erro melhorado
      if (error.response && error.response.status === 404) {
        alert("Animal não encontrado. Verifique o ID digitado.");
      } else if (error.response && error.response.status === 403) {
        alert("Você não tem permissão para excluir animais.");
      } else {
        alert("Erro ao tentar excluir o animal.");
      }
    }
  };

  return (
    <div className="page-background">
      <div className="main-card-container">
        
        <div className="tabs-nav">
          <button 
            className={`tab-btn ${activeTab === 'animal' ? 'active' : ''}`}
            onClick={() => setActiveTab('animal')}
          >
            Excluir Animal
          </button>
          <button 
            className={`tab-btn ${activeTab === 'adopter' ? 'active' : ''}`}
            onClick={() => setActiveTab('adopter')}
          >
            Excluir Adotante
          </button>
        </div>
        
        <div className="tab-divider"></div>

        <div className="tab-content">
          {activeTab === 'animal' ? (
            <>
              <div className="section-intro">
                <h2>Excluir Perfil de Animal</h2>
                <p>A exclusão de um perfil de animal é uma ação irreversível e removerá todos os dados associados.</p>
              </div>

              <div className="warning-box">
                <div className="warning-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c05621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="warning-text">
                  <strong>Ação Permanente</strong>
                  <p>Uma vez que um perfil é excluído, não pode ser recuperado.</p>
                </div>
              </div>

              <div className="action-card">
                <div className="input-group">
                  <label htmlFor="animalId">ID do Animal</label>
                  {/* 4. Conectar o input ao State */}
                  <input 
                    type="number" // Mudei para number para facilitar, mas text funciona
                    id="animalId" 
                    placeholder="Digite o ID do animal..." 
                    value={idBusca}
                    onChange={(e) => setIdBusca(e.target.value)}
                  />
                </div>
                <div className="button-row">
                  {/* 5. Adicionar o evento onClick */}
                  <button className="btn-delete" onClick={handleExcluirAnimal}>
                    Excluir Animal
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="section-intro">
              <h2>Excluir Conta de Adotante</h2>
              <div className="section-intro">
                <p>A exclusão de um conta de adotante é uma ação irreversível e removerá todos os dados associados.</p>
              </div>

              <div className="warning-box">
                <div className="warning-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c05621" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="warning-text">
                  <strong>Ação Permanente</strong>
                  <p>Uma vez que uma conta é excluída, não pode ser recuperada.</p>
                </div>
              </div>

              <div className="action-card">
                <div className="input-group">
                  <label htmlFor="adotanteEmail">Email do Adotante</label>
                  {/* 4. Conectar o input ao State */}
                  <input 
                    type="email" // Mudei para number para facilitar, mas text funciona
                    id="adotanteEmail" 
                    placeholder="Digite o email do adotante..." 
                    value={adotante}
                    onChange={(e) => setAdotante(e.target.value)}
                  />
                </div>
                <div className="button-row">
                  {/* 5. Adicionar o evento onClick */}
                  <button className="btn-delete" onClick={handleExcluirAdotante}>
                    Excluir Adotante
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Deletar;