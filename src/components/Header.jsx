import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          {/* Logo Icon */}
          <div>
            <img className = "logo-paw" src="/paw.webp" alt="" />
          </div>
          <span className="logo-text">Petopia</span>
        </div>

        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="cadastro" className="active">
            Cadastrar
          </a>
          <a href="deletar">Deletar</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="header-actions">
          <button className="btn-my-account">My Account</button>
          <div className="user-avatar">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="User"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
