import React from 'react';
import './Skills.css';

// Import gambar-gambar skill
import html5Icon from '../assets/skills/1.png';
import css3Icon from '../assets/skills/2.png';
import javascriptIcon from '../assets/skills/3.png';
import githubIcon from '../assets/skills/4.png';
import kubernetesIcon from '../assets/skills/5.png'; 
import chapiIcon from '../assets/skills/6.png'; 
import nodejsIcon from '../assets/skills/7.png';
import vscodeIcon from '../assets/skills/8.png';
import postmanIcon from '../assets/skills/9.png'; 
import figmaIcon from '../assets/skills/10.png';

function Skills() {
  const skillsData = [
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Kubernetes', icon: kubernetesIcon },
    { name: 'Chapi', icon: chapiIcon }, 
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'Figma', icon: figmaIcon },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Skillset <span className="highlight"> & Tools</span></h2>
      <p className="skills-subtitle">
        "Berikut adalah beberapa tools dan teknologi yang saya gunakan
        untuk mendukung proses pengembangan website"
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;