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
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="header-section">
        <div className="intro-text">
          <h1>Hallo, Saya <span className="biru">Rizky Hanifa A.</span></h1>
          <p>
            Saya adalah mahasiswa semester 7 dari jurusan Rekayasa Perangkat Lunak di Telkom University. Saya memiliki minat besar di bidang pengembangan Front End web dan telah mengikuti beberapa pelatihan serta bootcamp yang memperkuat keterampilan saya dalam membangun antarmuka website.
          </p>
          <div className="btns">
            <a href="#portfolio"><button className="btn-blue">Projects</button></a>
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
