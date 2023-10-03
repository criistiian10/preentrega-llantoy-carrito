import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom'; // Importa Link correctamente

function NavBar() {
  return (
    <nav className='NavBar'>
      <h3>Ecommerce</h3>
      <div className='Categories'>
        <NavLink to="/category/celular" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
        <NavLink to="/category/categorias" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Categorias</NavLink>
        <NavLink to="/category/precios" className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Precios</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;