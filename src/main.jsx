import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginCadastro from './pages/LoginCadastro.jsx'
import AdoptionPage from './pages/Adocao.jsx'
import "./LoginCadastro.css"
import "./Adocao.css"
import "../src/index.css"
import PetDetail from './pages/PetDetail.jsx'
import "./PetDetail.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PetDetail />
  </StrictMode>,
)
