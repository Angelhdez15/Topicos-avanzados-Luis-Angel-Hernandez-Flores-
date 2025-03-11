import React from "react";
import {Card,Button } from "react-bootstrap"
import "./ItemProductos.scss"
export function ItemProductos({producto,onReservar}) {
  return (
    <div className='p-2' >
          <Card>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body className="body">
              <Card.Title className="body_title">{producto.nombre}</Card.Title>
              <Card.Text className="body_text">{producto.precio}</Card.Text>
              <Card.Text className="body_text">{producto.horario}</Card.Text>
              <Card.Text className="body_text">{producto.fecha}</Card.Text>
              <Card.Text className="body_text">{producto.cantidad}</Card.Text>
              <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
            Reservar
          </Button>
            </Card.Body>
          </Card>
        
    </div>
  );
}
export function ItemPaquetes({ productos,onReservar }) {
  return (
    <div className="item-producto">
        <Card>
            <Card.Img variant="top" src={productos.imagen2} />
            <Card.Body className="body">
              <Card.Title className="body_title">{productos.nombre2}</Card.Title>
              <Card.Text className="body_text">{productos.precio2}</Card.Text>
              <Card.Text className="body_text">{productos.cantidad2}</Card.Text>
              <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
            Reservar
          </Button>
            </Card.Body>
          </Card>
    </div>
  );
}