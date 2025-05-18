import React from 'react';

export function ListComida({ Comidas, onEliminar, onEditar }) {
  return (
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
                  onClick={() => onEditar(comida)}
                >
                  Editar
                </button>
                <button
  className="producto-button producto-button-danger"
  onClick={() => onEliminar(comida._id)}
>
  Eliminar
</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="Comidas-empty">No hay Comidas disponibles</p>
      )}
    </div>
  );
}