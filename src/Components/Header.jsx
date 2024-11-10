import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/Header.css'
function Header() {
  return (
    <Navbar className="bg-custom-header" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <h2 className="brand-title">
            <i className="fa-solid fa-graduation-cap fa-fade brand-icon"></i>
            EduNox Panel
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
