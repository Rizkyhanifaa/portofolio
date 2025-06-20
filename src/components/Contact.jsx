import React from 'react';
import './Contact.css';

// Import gambar ikon
import linkedinIcon from '../assets/contact/linkedin.png';    
import instagramIcon from '../assets/contact/instagram.png'; 
import githubIcon from '../assets/contact/github.png';     

function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/in/rizkyhanifaafania', 
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      url: 'https://www.instagram.com/riz.kyhanifaa', 
    },
    {
      name: 'GitHub',
      icon: githubIcon,
      url: 'https://github.com/Rizkyhanifaa',
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <h2>Kontak <span className="highlight">Saya</span></h2>
      <p className="contact-description">
        Jangan ragu untuk mengirimkan pesan jika Anda memiliki pertanyaan, masukan, atau
        ingin berdiskusi lebih lanjut.
      </p>
      <div className="contact-icons">
        {contactLinks.map((link, index) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={index} className="contact-link-item">
            <img src={link.icon} alt={link.name} className="contact-icon" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;