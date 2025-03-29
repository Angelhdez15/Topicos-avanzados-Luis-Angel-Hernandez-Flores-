import React from "react";
import './item.css';

export function ItemProductos({ producto, onReservar }) {
  return (
    <div className="item-component">
      <div className="custom-card">
        <div className="custom-card-image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="custom-card-body">
          <h3 className="custom-card-title">{producto.nombre}</h3>
          <p className="custom-card-text"><strong>Precio:</strong> ${producto.precio}</p>
          <p className="custom-card-text"><strong>Horario:</strong> {producto.horario}</p>
          <p className="custom-card-text"><strong>Fecha:</strong> {producto.fecha}</p>
          <p className="custom-card-text"><strong>Cantidad:</strong> {producto.cantidad} persona(s)</p>
          <button className="custom-card-button" onClick={onReservar}>
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}

export function ItemPaquetes({ productos, onReservar }) {
  return (
    <div className="item-component"> 
      <div className="custom-card">
        <div className="custom-card-image">
          <img src={productos.imagen2} alt={productos.nombre2} />
        </div>
        <div className="custom-card-body">
          <h3 className="custom-card-title">{productos.nombre2}</h3>
          <p className="custom-card-text"><strong>Precio:</strong> ${productos.precio2}</p>
          <p className="custom-card-text"><strong>Cantidad:</strong> {productos.cantidad2} persona(s)</p>
          <button className="custom-card-button" onClick={onReservar}>
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}