import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";

export function LisComUsu({ Comidas }) {
  const [carrito, setCarrito] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGraciasModal, setShowGraciasModal] = useState(false);

  const agregarAlCarrito = (comida) => {
    setCarrito([...carrito, comida]);
    setPrecioTotal(precioTotal + (comida.precioC || 0));
    alert(`¡Has agregado "${comida.nombreC}" al carrito!`);
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
      <h2 className="text-center my-4">Platillos y Bebidas Para Reservar Disponibles</h2>
      <div className="productos-container">
        {Array.isArray(Comidas) && Comidas?.length > 0 ? (
          Comidas.map((comida) => (
            <div className="producto-card" key={comida._id}>
              <div className="producto-image">
                <img
                  src={`http://localhost:4000/uploadsC/${comida.imageC}`}
                  alt={comida.nombreC || "Imagen no disponible"}
                  className="producto-img"
                />
              </div>
              <div className="producto-body">
                <p className="producto-text">
                  <strong>Platillo:</strong> {comida.nombreC || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Precio:</strong> ${comida.precioC || "No disponible"}
                </p>
                <p className="producto-text">
                  <strong>Cantidad:</strong> {comida.cantidadC || "No disponible"} persona(s)
                </p>
                <div className="producto-actions">
                  <button
                    className="producto-button"
                    onClick={() => agregarAlCarrito(comida)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="Comidas-empty">No hay Comidas disponibles</p>
        )}

        {/* Botón para abrir el modal */}
        <div className="mt-4 text-center" style={{ width: "100%" }}>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart me-2"></i> Ver Carrito de Compras
          </Button>
        </div>

        {/* Modal del carrito */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="bi bi-basket2-fill me-2"></i> 🛒 Carrito de Compras
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {carrito.length > 0 ? (
              <ul>
                {carrito.map((item, index) => (
                  <li key={index} style={{ marginBottom: "15px", listStyle: "none" }}>
                    <p><strong>🍽️ Platillo:</strong> {item.nombreC}</p>
                    <p><strong>👥 Cantidad:</strong> {item.cantidadC || 0}</p>
                    <p><strong>💲 Precio:</strong> ${item.precioC || 0}</p>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      className="ms-2" 
                      onClick={() => eliminarDelCarrito(index, item.precioC || 0)}
                    >
                      🗑️ Eliminar
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted">🛒 Tu carrito está vacío. ¡Agrega algo delicioso! 🍔🍹</p>
            )}
            <h3 className="text-success text-center mt-4">Total: ${precioTotal}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              ❌ Cerrar
            </Button>
            {carrito.length > 0 && (
              <Button variant="success" onClick={confirmarReservaciones}>
                ✅ Confirmar Reservaciones
              </Button>
            )}
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