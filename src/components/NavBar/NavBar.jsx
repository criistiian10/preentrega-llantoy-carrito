import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, link } from 'react-router-dom';



function NavBar() {
  return (
    <Navbar expand="lg" className="NavBarColor" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href='/'>
            <CartWidget/> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/category/sports`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Deportes</NavLink>
            <NavLink to={`/category/shooter`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Shooters</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>



    </Navbar>
  );
}


export default NavBar