import React from "react";
import {Card, } from "react-bootstrap"
import "./ItemProductos.scss"
export function ItemProductos({producto}) {
  return (
    <div className='p-2' >
          <Card>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body className="body">
              <Card.Title className="body_title">{producto.nombre}</Card.Title>
              <Card.Text className="body_text">
                {producto.descripcion}
              </Card.Text>
            </Card.Body>
          </Card>
        
    </div>
  );
}
