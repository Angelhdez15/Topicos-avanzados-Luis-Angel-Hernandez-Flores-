import React from "react";
import '../../../Productos/itemProductos/item.css';

export function Itemactividades({ producto, onReservar }) {
  return (
    <div className="custom-card">
      <div className="custom-card-image">
        <img src={producto.imagen3} alt={producto.nombre3} />
      </div>
      <div className="custom-card-body">
        <h3 className="custom-card-title">{producto.nombre3}</h3>
        <p className="custom-card-text"><strong>Precio:</strong> ${producto.precio3}</p>
        <p className="custom-card-text"><strong>Horario:</strong> {producto.horario3}</p>
        <p className="custom-card-text"><strong>Fecha:</strong> {producto.fecha3}</p>
        <p className="custom-card-text"><strong>Cantidad:</strong> {producto.cantidad3} persona(s)</p>
        <button className="custom-card-button" onClick={onReservar}>
          Reservar
        </button>
      </div>
    </div>
  );
}

export function Itemactividades2({ productos, onReservar }) {
  return (
    <div className="custom-card">
      <div className="custom-card-image">
        <img src={productos.imagen4} alt={productos.nombre4} />
      </div>
      <div className="custom-card-body">
        <h3 className="custom-card-title">{productos.nombre4}</h3>
        <p className="custom-card-text"><strong>Precio:</strong> ${productos.precio4}</p>
        <p className="custom-card-text"><strong>Horario:</strong> {productos.horario4}</p>
        <p className="custom-card-text"><strong>Fecha:</strong> {productos.fecha4}</p>
        <p className="custom-card-text"><strong>Cantidad:</strong> {productos.cantidad4} persona(s)</p>
        <button className="custom-card-button" onClick={onReservar}>
          Reservar
        </button>
      </div>
    </div>
  );
}

export function Itemactividades3({ productos1, onReservar }) {
  return (
    <div className="custom-card">
      <div className="custom-card-image">
        <img src={productos1.imagen5} alt={productos1.nombre5} />
      </div>
      <div className="custom-card-body">
        <h3 className="custom-card-title">{productos1.nombre5}</h3>
        <p className="custom-card-text"><strong>Precio:</strong> ${productos1.precio5}</p>
        <p className="custom-card-text"><strong>Horario:</strong> {productos1.horario5}</p>
        <p className="custom-card-text"><strong>Fecha:</strong> {productos1.fecha5}</p>
        <p className="custom-card-text"><strong>Cantidad:</strong> {productos1.cantidad5} persona(s)</p>
        <button className="custom-card-button" onClick={onReservar}>
          Reservar
        </button>
      </div>
    </div>
  );
}
