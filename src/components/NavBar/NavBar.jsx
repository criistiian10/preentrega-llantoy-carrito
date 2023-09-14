import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'



function NavBar() {
  return (
    <Navbar expand="lg" className="NavBarColor" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
            <CartWidget/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Stock</Nav.Link>
            <NavDropdown title="Celulares" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Iphone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Motorola</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Otros Modelos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>



    </Navbar>
  );
}


export default NavBar