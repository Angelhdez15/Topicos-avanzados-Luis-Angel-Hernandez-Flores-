import React, { useState } from 'react';
import { datos, datos2 } from '../../../utils/Bd';
import { ItemPaquetes, ItemProductos } from '../itemProductos/ItemProducto';
import { Row, Col, Button, Modal } from "react-bootstrap";

export function HomeProductos() {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const agregarAlCarrito = (producto, precio) => {
    setCarrito([...carrito, producto]);
    setPrecioTotal(precioTotal + precio);
    alert(`¡Has agregado "${producto.nombre || producto.nombre2}" al carrito!`);
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
      <center><h1>Paquetes de Transporte</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos.map((producto, index) => (
          <Col key={index}>
            <div className="p-2">
              <ItemProductos 
                producto={producto} 
                onReservar={() => agregarAlCarrito(producto, producto.precio)} 
              />
            </div>
          </Col>
        ))}
      </Row>

      <center><h1>Paquetes de Comida</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos2.map((productos, index) => (
          <Col key={index}>
            <div className="p-2">
              <ItemPaquetes 
                productos={productos} 
                onReservar={() => agregarAlCarrito(productos, productos.precio2)} 
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
                <p><strong>Nombre:</strong> {item.nombre || item.nombre2}</p>
                <p><strong>Descripción:</strong> {item.descripcion || 'No especificada'}</p>
                <p><strong>Precio:</strong> ${item.precio || item.precio2}</p>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="ms-2" 
                  onClick={() => eliminarDelCarrito(index, item.precio || item.precio2)}
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