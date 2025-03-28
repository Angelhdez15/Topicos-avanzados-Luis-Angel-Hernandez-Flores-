import React from "react";
import {Card, Button} from "react-bootstrap"

export function Itemactividades({producto,onReservar}) {
  return (
    <div className='p-2' >
          <Card>
            <Card.Img variant="top" src={producto.imagen3} />
            <Card.Body className="body">
              <Card.Title className="body_title">Nombre: {producto.nombre3}</Card.Title>
              <Card.Text className="body_text">Precio: ${producto.precio3}</Card.Text>
              <Card.Text className="body_text">Horario: {producto.horario3}</Card.Text>
              <Card.Text className="body_text">Fecha: {producto.fecha3}</Card.Text>
              <Card.Text className="body_text">Cantidad: {producto.cantidad3}</Card.Text>
              <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
            Reservar
          </Button>
            </Card.Body>
          </Card>
        
    </div>
  );
}
export function Itemactividades2({productos,onReservar}) {
    return (
      <div className='p-2' >
            <Card>
              <Card.Img variant="top" src={productos.imagen4} />
              <Card.Body className="body">
                <Card.Title className="body_title">Nombre: {productos.nombre4}</Card.Title>
                <Card.Text className="body_text">Precio: ${productos.precio4}</Card.Text>
                <Card.Text className="body_text">Horario: {productos.horario4}</Card.Text>
                <Card.Text className="body_text">Fecha: {productos.fecha4}</Card.Text>
                <Card.Text className="body_text">Cantidad: {productos.cantidad4}</Card.Text>
                <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
              Reservar
            </Button>
              </Card.Body>
            </Card>
          
      </div>
    );
}
export function Itemactividades3({productos1,onReservar}) {
    return (
      <div className='p-2' >
            <Card>
              <Card.Img variant="top" src={productos1.imagen5} />
              <Card.Body className="body">
                <Card.Title className="body_title">Nombre: {productos1.nombre5}</Card.Title>
                <Card.Text className="body_text">Precio: ${productos1.precio5}</Card.Text>
                <Card.Text className="body_text">Horario: {productos1.horario5}</Card.Text>
                <Card.Text className="body_text">Fecha: {productos1.fecha5}</Card.Text>
                <Card.Text className="body_text">Cantidad: {productos1.cantidad5}</Card.Text>
                <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
              Reservar
            </Button>
              </Card.Body>
            </Card>
          
      </div>
    );
}
