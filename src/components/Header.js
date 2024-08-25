import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="cta">
          <img src="/assets/journal.png" alt="Journal" className="journal-image" />
          <span>Don't have a journal yet? <br />
<a href="/order">Go order one <strong>here</strong></a></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
