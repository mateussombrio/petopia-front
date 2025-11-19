import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginCadastro from './pages/LoginCadastro.jsx'
import AdoptionPage from './pages/Adocao.jsx'
import "./styles/LoginCadastro.css"
import "./styles/Adocao.css"
import "./styles/index.css"
import PetDetail from './pages/PetDetail.jsx'
import "./styles/PetDetail.css"
import CadastroPet from './pages/CadastroPet.jsx'
import "./styles/CadastroPet.css"
import Retirada from './pages/Retirada.jsx'
import './styles/Retirada.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Retirada />
  </StrictMode>,
)
