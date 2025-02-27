import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header>
    <h1>Ringkang Basumatary</h1>
    <div className="contact-info">
      <a href="mailto:ringkangbty87@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> ringkangbty87@gmail.com

      <a href="https://linkedin.com/in/ringkangbty">
        <FontAwesomeIcon icon={faLinkedin} /> ringkangbty
      </a>
      <a href="https://github.com/Ringkang1">
        <FontAwesomeIcon icon={faGithub} /> Ringkang1
      </a>
    </div>
  </header>
);

export default Header;
