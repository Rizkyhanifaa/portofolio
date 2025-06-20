import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My <span className="highlight">Projects</span></h2>
      <p>"Saya telah memilih dan mencantumkan beberapa proyek terbaru saya di sini untuk saya bagikan kepada Anda."</p>

      <div className="project-card">
        <div className="project-text">
          <h3>Story <span className="highlight">App</span></h3>
          <p>Aplikasi yang memungkinkan pengguna untuk membaca dan menambahkan cerita pendek, serta menikmati pengalaman aplikasi modern berbasis Progressive Web App (PWA).</p>
          <a href="https://rizkyhanifaa.github.io/storyapp/" target="_blank" rel="noopener noreferrer">
            <button className="btn-blue">Lihat Project</button>
          </a>
        </div>
        <div className="project-img">
          <img src="./src/assets/story.png" alt="Story App" />
        </div>
      </div>

      <div className="project-card-right">
        <div className="project-img">
          <img src="./src/assets/wastewise.png" alt="WasteWise Web" />
        </div>
        <div className="project-text">
          <h3>WasteWise <span className="highlight">Web</span></h3>
          <p>Aplikasi berbasis web yang memungkinkan pengguna untuk mengklasifikasikan sampah menjadi organik dan anorganik, serta memberikan rekomendasi pengolahan yang tepat.</p>
          <a href="https://rizkyhanifaa.github.io/WasteWiseWeb" target="_blank" rel="noopener noreferrer">
            <button className="btn-blue">Lihat Project</button>
          </a>
        </div>
      </div>

      <div className="project-card">
        <div className="project-text">
          <h3>Notes <span className="highlight">App</span></h3>
          <p>Proyek aplikasi catatan sederhana yang dibuat sebagai bagian dari pembelajaran di Dicoding. Terdiri dari frontend dan backend.</p>
          <a href="https://github.com/Rizkyhanifaa/Project_FrontEnd_NotesApp_BackEnd_Fundamentals.git" target="_blank" rel="noopener noreferrer">
            <button className="btn-blue">Lihat Project</button>
          </a>
        </div>
        <div className="project-img">
          <img src="./src/assets/notes.png" alt="Notes App" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
