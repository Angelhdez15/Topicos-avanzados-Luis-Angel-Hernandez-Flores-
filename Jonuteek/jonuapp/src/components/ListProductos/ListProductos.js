import React from 'react';
import "./lit.css";

export function ListProductos({ productos, onEliminar, onEditar }) {
  return (
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
                  onClick={() => onEditar(producto)}
                >
                  Editar
                </button>
                <button
                  className="producto-button producto-button-danger"
                  onClick={() => onEliminar(producto._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="productos-empty">No hay productos disponibles</p>
      )}
    </div>
  );
}