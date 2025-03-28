import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import Image from "./image.png"
import "./Menu.css"

export function Menu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <img src={Image} alt="Logo" width="130" height="80"/>
      <Nav className="me-auto">
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/producto">Paquetes</Link>
        <Link className='nav-link' to="/actividades">Actividades</Link>
      </Nav>
      <Nav><Link className='nav-link' to="/login">Iniciar sesión</Link>
      <Link className='nav-link' to="/registro">Registrarse</Link></Nav>
      <Link className='nav-link' to="/formproducto">Gestion</Link>

    </Container>
  </Navbar>
  )
}
