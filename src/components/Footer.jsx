import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Petopia. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Políticas de Privacidade</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Centro de Ajuda</a>
        </div>
      </div>
    </footer>
  );
};
