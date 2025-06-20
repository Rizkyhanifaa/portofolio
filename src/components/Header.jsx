import React, { useState } from 'react';
import './Header.css';
import profileImg from '../assets/profilku.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // tutup menu saat link diklik
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">Hanifa</div>
        <div className="menu-icon" onClick={handleToggle}>
          ☰
        </div>
        <nav className={isMenuOpen ? "nav-open" : ""}>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="header-section">
        <div className="intro-text">
          <h1>Hallo, Saya<br /> <span className="biru">Rizky Hanifa Afania</span></h1>
          <p>
            Front-End Development Enthusiast
          </p>
          <div className="btns">
            <a href="https://github.com/Rizkyhanifaa" target="_blank"><button className="btn-blue">Github</button></a>
            <a href="https://www.linkedin.com/in/rizkyhanifaafania" target="_blank" rel="noopener noreferrer"><button className="btn-outline">LinkedIn</button></a>
          </div>
        </div>
        <div className="profile-img">
          <img src={profileImg} alt="Rizky Hanifa Afania" />
        </div>
      </section>
    </>
  );
}

export default Header;
