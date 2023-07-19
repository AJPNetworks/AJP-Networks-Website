import React from 'react';
import icon from '../icon.png';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <div className="icon">
          <img src={icon} style={{ height: '100px' }} alt="Icon" />
        </div>
        <div className="links">
          <ul className="list-unstyled">
            <li><a href="#top">Top</a></li>
            <li><a href="https://share.ajp.network/">AJP Networks Sharing</a></li>
            <li><a href="https://ajp.network/sitemap.xml">Sitemap</a></li>
            <li><a href="https://ajp.network/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </Container>
      <div className="identity">
        <p>Copyright &copy; 2023 AJP Networks LLC | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
