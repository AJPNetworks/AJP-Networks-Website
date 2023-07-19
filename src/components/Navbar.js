import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import icon from '../icon.png';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navbar-main'>
      <Navbar.Brand href="#home">
      <img src={icon} className="Nav-icon" alt="Logo"/>
      AJP Networks LLC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#top">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>    
  );
}

export default AppNavbar;
