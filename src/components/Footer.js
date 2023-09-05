import React, { useState } from 'react';
import icon from '../icon.png';
import { Modal, Button, Container } from 'react-bootstrap';

function DisclaimerModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} className="disclaimer-modal">
      <Modal.Header>
        <Modal.Title>Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Logos</h5>
        {"All logos and trademarks of Elevate Solutions Group LLC and CooperVision, a unit of The Cooper Companies, Inc., are the property of their respective owners. These logos and trademarks are displayed for the purpose of identification.  While both companies are clients of AJP Networks LLC, their appearance on this website should not be construed as an endorsement of AJP Networks LLC by either Elevate Solutions Group LLC or CooperVision, a unit of The Cooper Companies, Inc."}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className='footer'>
      <Container className='footer-container'>
        <div className="icon">
          <img src={icon} style={{ height: '100px' }} alt="Icon" />
        </div>
        <div className="links">
          <ul className="list-unstyled">
            <li><a href="#home">Top</a></li>
            <li><a href="https://share.ajp.network/">AJP Networks Sharing</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="##" onClick={handleShow}>Disclaimer</a></li>
          </ul>
        </div>
      </Container>
      <div className="identity">
        <p>Copyright &copy; 2023 AJP Networks LLC | All Rights Reserved.</p>
      </div>
      <DisclaimerModal show={show} handleClose={handleClose} />
    </footer>
  );
}

export default Footer;
