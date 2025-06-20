import React from 'react';
import './Header.css';
import profileImg from '../assets/profilku.jpg';

function Header() {
  return (
    <>
      {/* Navbar tetap di luar section */}
      <div className="navbar">
        <div className="logo">Hanifa</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="header-section">
        <div className="intro-text">
          <h1>Hallo, Saya <span className="biru">Rizky Hanifa Afania</span></h1>
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
