import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../icon.png';

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (targetId, offset = 50) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
    setExpanded(false);  // Collapse navbar after scrolling
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#212121' }} variant="dark" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Navbar.Brand href="/">
          <img src={icon} className="Nav-Icon" alt="Logo"/>
          AJP Networks LLC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleScroll('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll('about')}>About</Nav.Link>
            <Nav.Link onClick={() => handleScroll('clients')}>Clients</Nav.Link>
            <Nav.Link onClick={() => handleScroll('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => handleScroll('connect')}>Connect</Nav.Link>
            <Nav.Link onClick={() => handleScroll('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='Nav-Compensation'></div>
    </div>
  );
}

export default AppNavbar;
