import React, { useState } from 'react';
import axios from 'axios'; // 1. Importar Axios
import '../styles/CadastroPet.css';

const CadastroPet = () => {
  // 2. Criar um objeto de estado único para o formulário
  // Os nomes das chaves (nome, raca, etc) devem ser iguais aos que seu Backend espera
  const [formData, setFormData] = useState({
    nome: '',
    raca: '',
    idade: '',
    genero: '',
    status_saude: 'Saudável', // Valor padrão
    foto: '' // Como é um link, iniciamos como string vazia
  });

  // Função genérica para atualizar os inputs de texto
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função específica para os botões de gênero
  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      genero: gender
    });
  };

  // 3. Função de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne que a página recarregue

    try {
      // Envia os dados para o backend (ajuste a rota se necessário)
      const response = await axios.post('https://petopia-n81j.onrender.com/cadastro', formData);
      
      alert('Animal cadastrado com sucesso!');
      console.log(response.data);
      
      // Opcional: Limpar o formulário após sucesso
      setFormData({
        nome: '',
        raca: '',
        idade: '',
        genero: '',
        status_saude: 'Saudável',
        foto: ''
      });

    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar animal. Verifique o console.');
    }
  };

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <div className="form-header">
          <h1>Cadastre um novo animal para ser adotado</h1>
          <p>Preencha os campos abaixo para cadastrar o animal</p>
        </div>

        {/* 4. Adicionar onSubmit no form */}
        <form className="animal-form" onSubmit={handleSubmit}>
          
          <div className="form-section">
            <h3>Detalhes do Animal</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Nome</label>
              {/* 5. Conectar inputs ao estado (name, value, onChange) */}
              <input 
                type="text" 
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome do animal" 
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Raça</label>
                <input 
                  type="text" 
                  name="raca"
                  value={formData.raca}
                  onChange={handleChange}
                  placeholder="Ex: Golden Retriever" 
                  required
                />
              </div>
              <div className="input-group">
                <label>Idade</label>
                <input 
                  type="text" 
                  name="idade"
                  value={formData.idade}
                  onChange={handleChange}
                  placeholder="Ex: 2 anos" 
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Gênero</label>
              <div className="gender-options">
                {['Macho', 'Fêmea'].map((gender) => (
                  <button
                    key={gender}
                    type="button" // Importante ser type="button" para não submeter o form
                    className={`gender-btn ${formData.genero === gender ? 'active' : ''}`}
                    onClick={() => handleGenderSelect(gender)}
                  >
                    {gender}
                  </button>
                ))}
              </div>
              {/* Input escondido para garantir validação HTML se necessário, ou apenas controle visual acima */}
            </div>
          </div>

          <div className="form-section">
            <h3>Saúde e Foto</h3>
            <div className="divider"></div>

            <div className="input-group">
              <label>Status de Saúde</label>
              <div className="select-wrapper">
                <select 
                  name="saude"
                  value={formData.status_saude}
                  onChange={handleChange}
                >
                  <option value="Saudável">Saudável</option>
                  <option value="Precisa de Atenção">Precisa de Atenção</option>
                  <option value="Crítico">Crítico</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Link da Foto (URL)</label>
              {/* MUDANÇA IMPORTANTE: 
                  Troquei o drag-and-drop complexo por um input de texto simples 
                  já que você armazena STRING (URL) no banco.
              */}
              <input 
                type="text" 
                name="foto"
                value={formData.foto}
                onChange={handleChange}
                placeholder="Cole aqui o link da imagem (https://...)" 
                required
              />
              
              {/* Preview da imagem (opcional, só aparece se houver link) */}
              {formData.foto && (
                <div style={{ marginTop: '10px' }}>
                  <p style={{fontSize: '12px', color: '#666'}}>Pré-visualização:</p>
                  <img 
                    src={formData.foto} 
                    alt="Preview" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
                    onError={(e) => e.target.style.display = 'none'} // Esconde se o link for ruim
                  />
                </div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Cadastrar Animal</button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default CadastroPet;