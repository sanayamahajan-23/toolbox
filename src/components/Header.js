import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
