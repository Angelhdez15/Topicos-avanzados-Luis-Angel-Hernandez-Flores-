import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./Menu.scss"
export function Menu() {
  return (
    <Navbar>
    <Container>
      <Navbar.Brand as={Link} to="/">Barra de herramientas</Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link"  to="/producto">Productos</Link>
        <Link className="nav-link"  href="#pricing">Pricing</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
