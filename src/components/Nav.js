import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/booking-page">Reservas</Link></li>
          <li><Link to="/order-online">Pedidos on-line</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><a href="#contact">Contatos</a></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>
    </>
  );
};

export default Nav;
