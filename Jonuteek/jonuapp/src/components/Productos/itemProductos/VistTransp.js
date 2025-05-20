import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

export function Vistransportes({ transportes }) {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGraciasModal, setShowGraciasModal] = useState(false);

  const agregarAlCarrito = (transporte) => {
    setCarrito([...carrito, transporte]);
    setPrecioTotal(precioTotal + (transporte.preciot || 0));
    alert(`¡Has agregado "${transporte.nombret}" al carrito!`);
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
      <h2 className="text-center my-4">Aparta Tu Boleto</h2>

      <div className="productos-container">
        {Array.isArray(transportes) && transportes.length > 0 ? (
          transportes.map((transporte) => (
            <div className="producto-card" key={transporte._id}>
              <div className="producto-image">
                <img
                  src={`http://localhost:4000/uploadsT/${transporte.imagept}`}
                  alt={transporte.nombret || "Imagen no disponible"}
                  className="producto-img"
                />
              </div>
              <div className="producto-body">
                <h3 className="producto-title">{transporte.nombret}</h3>
                <p className="producto-text">
                  <strong> Precio:</strong> ${transporte.preciot || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong> Horario:</strong> {transporte.horariot || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong> Fecha:</strong> {transporte.fechat || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong> Cantidad:</strong> {transporte.cantidadt || "No disponible"} persona(s)
                </p>
                <div className="producto-actions">
                  <button
                    className="producto-button"
                    onClick={() => agregarAlCarrito(transporte)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="transportes-empty">No hay transportes disponibles</p>
        )}
      </div>

      {/* Botón para abrir el modal */}
      <div className="mt-4 text-center">
        <Button variant="primary" onClick={handleShow}>
          <i className="bi bi-cart me-2"></i> Ver Carrito de Compras
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
                <p><strong>🚌 Transporte:</strong> {item.nombret}</p>
                <p><strong>📅 Fecha:</strong> {item.fechat || 'No especificada'}</p>
                <p><strong>⏰ Horario:</strong> {item.horariot || 'No especificado'}</p>
                <p><strong>👥 Cantidad:</strong> {item.cantidadt || 0}</p>
                <p><strong>💲 Precio:</strong> ${item.preciot || 0}</p>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="ms-2" 
                  onClick={() => eliminarDelCarrito(index, item.preciot || 0)}
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
  );
}