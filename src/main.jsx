import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginCadastro from './pages/LoginCadastro.jsx'
import AdoptionPage from './pages/Adocao.jsx'
import "./LoginCadastro.css"
import "./Adocao.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdoptionPage />
  </StrictMode>,
)
