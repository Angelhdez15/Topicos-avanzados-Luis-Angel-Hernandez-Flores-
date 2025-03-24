import React from "react";
import {Card, Button} from "react-bootstrap"
import "./itemactividades.scss"

export function Itemactividades({producto,onReservar}) {
  return (
    <div className='p-2' >
          <Card>
            <Card.Img variant="top" src={producto.imagen3} />
            <Card.Body className="body">
              <Card.Title className="body_title">{producto.nombre3}</Card.Title>
              <Card.Text className="body_text">{producto.precio3}</Card.Text>
              <Card.Text className="body_text">{producto.horario3}</Card.Text>
              <Card.Text className="body_text">{producto.fecha3}</Card.Text>
              <Card.Text className="body_text">{producto.cantidad3}</Card.Text>
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
                <Card.Title className="body_title">{productos.nombre4}</Card.Title>
                <Card.Text className="body_text">{productos.precio4}</Card.Text>
                <Card.Text className="body_text">{productos.horario4}</Card.Text>
                <Card.Text className="body_text">{productos.fecha4}</Card.Text>
                <Card.Text className="body_text">{productos.cantidad4}</Card.Text>
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
                <Card.Title className="body_title">{productos1.nombre5}</Card.Title>
                <Card.Text className="body_text">{productos1.precio5}</Card.Text>
                <Card.Text className="body_text">{productos1.horario5}</Card.Text>
                <Card.Text className="body_text">{productos1.fecha5}</Card.Text>
                <Card.Text className="body_text">{productos1.cantidad5}</Card.Text>
                <Button variant="primary" className="w-100 mt-3" onClick={onReservar}>
              Reservar
            </Button>
              </Card.Body>
            </Card>
          
      </div>
    );
}
