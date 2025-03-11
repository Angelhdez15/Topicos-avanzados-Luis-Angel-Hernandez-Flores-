import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
export function Menu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Barra de herramientas</Navbar.Brand>
      <Nav className="me-auto">
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/producto">Productos</Link>
        <Link className='nav-link' to="/formproducto">Gestion Productos</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
