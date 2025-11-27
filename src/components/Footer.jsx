import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <>
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
    </>
  );
};
