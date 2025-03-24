import React from 'react';
import { Table, Button } from "react-bootstrap";

export function ListProductos({ productos}) { 
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Imagen</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {productos.length > 0 ? (
          productos.map((producto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.unidad}</td>
              <td><img src={producto.imagen} alt="Imagen" width="50" /></td>
              <td><Button variant="success">Editar</Button></td>
              <td><Button variant="danger">Eliminar</Button></td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center">No hay productos disponibles</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}