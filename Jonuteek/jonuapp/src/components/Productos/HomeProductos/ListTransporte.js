import React from 'react';

export function Listtransportes({ transportes, onEliminar, onEditar }) {
  return (
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
              <p className="producto-text">
                <strong>Transporte:</strong> {transporte.nombret || "No disponible"}
              </p>
              <p className="producto-text">
                <strong>Precio:</strong> ${transporte.preciot || "No disponible"}
              </p>
              <p className="producto-text">
                <strong>Horario:</strong> {transporte.horariot || "No disponible"}
              </p>
              <p className="producto-text">
                <strong>Fecha:</strong> {transporte.fechat || "No disponible"}
              </p>
              <p className="producto-text">
                <strong>Cantidad:</strong> {transporte.cantidadt || "No disponible"} persona(s)
              </p>
              <div className="producto-actions">
                <button
                  className="producto-button"
                  onClick={() => onEditar(transporte)}
                >
                  Editar
                </button>
                <button
                  className="producto-button producto-button-danger"
                  onClick={() => onEliminar(transporte._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="transportes-empty">No hay transportes disponibles</p>
      )}
    </div>
  );
}