import React from "react";
import { Card, Button } from "react-bootstrap";

export function ItemProductos({ producto, onReservar }) {
  return (
    <div className="p-2">
      <Card>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="body">
          <Card.Title className="body_title">Nombre: {producto.nombre}</Card.Title>
          <Card.Text className="body_text">Precio: ${producto.precio}</Card.Text>
          <Card.Text className="body_text">Horario: {producto.horario}</Card.Text>
          <Card.Text className="body_text">Fecha: {producto.fecha}</Card.Text>
          <Card.Text className="body_text">Cantidad: {producto.cantidad} persona(s)</Card.Text>
          <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
            Reservar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export function ItemPaquetes({ productos, onReservar }) {
  return (
    <div className="p-2">
      <Card>
        <Card.Img variant="top" src={productos.imagen2} />
        <Card.Body className="body">
          <Card.Title className="body_title">Nombre: {productos.nombre2}</Card.Title>
          <Card.Text className="body_text">Precio: ${productos.precio2}</Card.Text>
          <Card.Text className="body_text">Cantidad: {productos.cantidad2} persona(s)</Card.Text>
          <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
            Reservar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}