import React, { useState } from 'react';
import { datos3, datos4, datos5 } from '../../../../utils/Bd';
import { Itemactividades, Itemactividades2, Itemactividades3 } from '../itemactividades/Itemactividades';
import { Row, Col, Button, Modal } from "react-bootstrap";

export function Actividades() {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const agregarAlCarrito = (producto, precio) => {
    setCarrito([...carrito, producto]);
    setPrecioTotal(precioTotal + precio);
    alert(`¡Has agregado "${producto.nombre3 || producto.nombre4 || producto.nombre5}" al carrito!`);
  };

  const eliminarDelCarrito = (index, precio) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    setPrecioTotal(precioTotal - precio);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const confirmarReservaciones = () => {
    alert('¡Reservaciones confirmadas!');
    setCarrito([]);
    setPrecioTotal(0);
    setShowModal(false);
  };

  return (
    <div className='container'>
      <center><h1>Santuario Del Manati El Girasoles</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos3.map((producto, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades 
                producto={producto} 
                onReservar={() => agregarAlCarrito(producto, producto.precio3)} 
              />
            </div>
          </Col>
        ))}
      </Row>
      <center><h1>Santuario Del Manati El Iguanal</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos4.map((productos, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades2 
                productos={productos} 
                onReservar={() => agregarAlCarrito(productos, productos.precio4)} 
              />
            </div>
          </Col>
        ))}
      </Row>
      <center><h1>Santuario Del Manati El Mangalitos</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos5.map((productos1, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades3 
                productos1={productos1} 
                onReservar={() => agregarAlCarrito(productos1, productos1.precio5)} 
              />
            </div>
          </Col>
        ))}
      </Row>

      {/* Botón para abrir el modal */}
      <div className="mt-4 text-center">
        <Button variant="primary" onClick={handleShow}>
          <i className="bi bi-cart me-2"></i> {/* Ícono de carrito */}
          Ver Carrito de Compras
        </Button>
      </div>

      {/* Modal del carrito */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <p><strong>Nombre:</strong> {item.nombre3 || item.nombre4 || item.nombre5}</p>
                <p><strong>Fecha:</strong> {item.fecha3 || item.fecha4 || item.fecha5 || 'No especificada'}</p>
                <p><strong>Horario:</strong> {item.horario3 || item.horario4 || item.horario5 || 'No especificado'}</p>
                <p><strong>Max. Personas:</strong> {item.cantidad3 || item.cantidad4 || item.cantidad35}</p>
                <p><strong>Precio:</strong> ${item.precio3 || item.precio4 || item.precio5}</p>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="ms-2" 
                  onClick={() => eliminarDelCarrito(index, item.precio3 || item.precio4 || item.precio5)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
          <h3>Total: ${precioTotal}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={confirmarReservaciones}>
            Confirmar Reservaciones
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}