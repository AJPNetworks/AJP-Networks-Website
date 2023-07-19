import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import icon from '../icon.png';

function AppNavbar() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#212121' }}variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src={icon} className="Nav-Icon" alt="Logo"/>
          AJP Networks LLC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#connect">Connect</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='Nav-Compensation'></div>
    </div>
  );
}

export default AppNavbar;
