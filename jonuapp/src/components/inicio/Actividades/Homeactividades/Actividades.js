import React, { useState } from 'react';
import {datos3, datos4,datos5} from '../../../../utils/Bd';
import { Itemactividades, Itemactividades2, Itemactividades3 } from '../itemactividades/Itemactividades';
import { Row, Col, Table, Button, Modal } from "react-bootstrap"; // Importa Modal

export function Actividades() {
  const fondo = {
    tema: {
      backgroundColor: 'black',
      color: "white",
      fontSize: '20px'
    }
  };

  // Estado para almacenar los paquetes reservados
  const [reservas, setReservas] = useState([]);

  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);

  // Función para manejar la reserva
  const handleReservar = (nombre) => {
    setReservas([...reservas, nombre]); // Agrega el nombre del paquete a la lista de reservas
  };

  // Función para eliminar una reserva
  const handleEliminar = (index) => {
    const nuevasReservas = reservas.filter((_, i) => i !== index); // Filtra la reserva a eliminar
    setReservas(nuevasReservas);
  };

  // Función para modificar una reserva (puedes implementar la lógica que desees)
  const handleModificar = (index) => {
    const nuevoNombre = prompt("Ingrese el nuevo nombre del paquete:"); // Ejemplo de modificación
    if (nuevoNombre) {
      const nuevasReservas = [...reservas];
      nuevasReservas[index] = nuevoNombre;
      setReservas(nuevasReservas);
    }
  };

  return (
    <div className='container' style={fondo.tema}>
      <center><h1>Santuario Del Manati El Girasoles</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos3.map((producto, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades producto={producto} onReservar={() => handleReservar(producto.nombre3)} />
            </div>
          </Col>
        ))}
      </Row>
      <center><h1>Santuario Del Manati El Iguanal</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos4.map((productos, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades2 productos={productos} onReservar={() => handleReservar(productos.nombre4)} />
            </div>
          </Col>
        ))}
      </Row>
      <center><h1>Santuario Del Manati El Mangalitos</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos5.map((productos1, index) => (
          <Col key={index}>
            <div className="p-2">
              <Itemactividades3 productos1={productos1} onReservar={() => handleReservar(productos1.nombre5)} />
            </div>
          </Col>
        ))}
      </Row>
      <center><h2>Reservas</h2></center>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre del Paquete</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr key={index}>
              <td>{reserva}</td>
              <td>
                <Button variant="warning" onClick={() => handleModificar(index)}>Modificar</Button>{' '}
                <Button variant="danger" onClick={() => handleEliminar(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <center>
        <Button variant="primary" className="w-100 mt-3" onClick={() => setShowModal(true)}>
          Confirmar Reservaciones
        </Button>
      </center>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reservación Exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Tu reservación ha sido confirmada con éxito!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}