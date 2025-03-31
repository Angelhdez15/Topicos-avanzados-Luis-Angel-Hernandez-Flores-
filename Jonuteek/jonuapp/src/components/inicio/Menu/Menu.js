import React from 'react';
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Image from "./image.png";
import "./Menu.css";

export function Menu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <img src={Image} alt="Logo" width="130" height="80" />
        <Nav className="me-auto">
          <Link className='nav-link' to="/home">Home</Link>
          <Link className='nav-link' to="/producto">Paquetes</Link>
          <Link className='nav-link' to="/list">Actividades</Link>
        </Nav>
        <Nav>
          <Link className='nav-link' to="/">Iniciar sesión</Link>
          <Link className='nav-link' to="/registro">Registrarse</Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-gestion">
            Gestión
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/formproducto">Gestionar Actividades</Dropdown.Item>
            <Dropdown.Item as={Link} to="/formusuarios">Gestionar Usuarios</Dropdown.Item>
            <Dropdown.Item as={Link} to="/formreservas">Gestionar Reservas</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}
