import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <hr className="line" />
      <h2>Tentang <span className="highlight">Saya</span></h2>
      <p className="about-description">
        “Saya adalah mahasiswa semester 7 dari jurusan Rekayasa Perangkat Lunak di Telkom University.
        Saya memiliki minat besar di bidang pengembangan Front End web dan telah mengikuti beberapa
        pelatihan serta bootcamp yang memperkuat keterampilan saya dalam membangun antarmuka website.”
      </p>
    </section>
  );
}

export default About;
