import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import "../../../Productos/itemProductos/item.css"

export function Actividades({ productos }) {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGraciasModal, setShowGraciasModal] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setPrecioTotal(precioTotal + (producto.precio || 0));
    alert(`¡Has agregado "${producto.nombre}" al carrito!`);
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
    setCarrito([]);
    setPrecioTotal(0);
    setShowModal(false);
    setShowGraciasModal(true); // Mostrar el modal de agradecimiento
  };

  const cerrarGraciasModal = () => setShowGraciasModal(false);

  return (
    <div>
      <h2 className="text-center my-4">Actividades Disponibles Por Santuario</h2>
      <div className="productos-container">
        {Array.isArray(productos) && productos.length > 0 ? (
          productos.map((producto) => (
            <div className="producto-card" key={producto._id}>
              <div className="producto-image">
                <img
                  src={`http://localhost:4000/uploads/${producto.imagep}`}
                  alt={producto.nombre || "Imagen no disponible"}
                  className="producto-img"
                />
              </div>
              <div className="producto-body">
                <h3 className="producto-title">{producto.ubicacion}</h3>
                <p className="producto-text">
                  <strong>Actividad:</strong> {producto.nombre || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Precio:</strong> ${producto.precio || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Horario:</strong> {producto.horario || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Fecha:</strong> {producto.fecha || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Cantidad:</strong> {producto.cantidad || 0} persona(s)
                </p>
                <div className="producto-actions">
                  <button
                    className="producto-button"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="productos-empty">No hay Actividades disponibles</p>
        )}

        {/* Botón para abrir el modal */}
        <div className="mt-4 text-center">
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart me-2"></i> Ver Carrito de Compras
          </Button>
        </div>

        {/* Modal del carrito */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi bi-tree me-2"></i> Carrito de Compras
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  <p><strong>🌿 Ubicación:</strong> {item.ubicacion}</p>
                  <p><strong>🌸 Nombre:</strong> {item.nombre}</p>
                  <p><strong>📅 Fecha:</strong> {item.fecha || 'No especificada'}</p>
                  <p><strong>⏰ Horario:</strong> {item.horario || 'No especificado'}</p>
                  <p><strong>👥 Cantidad:</strong> {item.cantidad || 0}</p>
                  <p><strong>💲 Precio:</strong> ${item.precio || 0}</p>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    className="ms-2" 
                    onClick={() => eliminarDelCarrito(index, item.precio || 0)}
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
            <h3 className="text-success">Total: ${precioTotal}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" onClick={confirmarReservaciones}>
            ✅ Confirmar Reservaciones
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal de agradecimiento */}
        <Modal show={showGraciasModal} onHide={cerrarGraciasModal}>
          <Modal.Header closeButton>
            <Modal.Title>¡Gracias por tu reservación!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              🌟 Gracias por confiar en <strong>JONUTEEK</strong>. Tu reservación ha sido confirmada y estamos emocionados de ser parte de tus momentos especiales. 🌸
            </p>
            <p>
              En <strong>JONUTEEK</strong>, cada experiencia cuenta. ¡Nos vemos pronto para compartir esta maravillosa aventura! 🌿✨
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={cerrarGraciasModal}>
            ❌ Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}