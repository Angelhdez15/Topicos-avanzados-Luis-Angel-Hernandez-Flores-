import React from "react";

export function ItemProductos({ nombre, precio, cantidad, unidad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Cantidad: {cantidad} unidades</p>
      <p>Tamaño: {unidad}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
}
