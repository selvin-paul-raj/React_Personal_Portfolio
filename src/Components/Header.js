import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#spr" className="logo">SPR Hackz</a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
