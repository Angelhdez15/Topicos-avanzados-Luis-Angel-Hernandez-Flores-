import React, { useState } from 'react';
import { datos, datos2 } from '../../../utils/Bd';
import { ItemPaquetes, ItemProductos } from '../itemProductos/ItemProducto';
import { Row, Col, Table, Button, Modal } from "react-bootstrap"; // Importa Modal
export function HomeProductos() {
 
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
    <div className='container'>
      <center><h1>Paquetes de Transporte</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos.map((producto, index) => (
          <Col key={index}>
            <div className="p-2">
              <ItemProductos producto={producto} onReservar={() => handleReservar(producto.nombre)} />
            </div>
          </Col>
        ))}
      </Row>

      <center><h1>Paquetes de Comida</h1></center>
      <Row xs={1} md={3} lg={4}>
        {datos2.map((productos, index) => (
          <Col key={index}>
            <div className="p-2">
              <ItemPaquetes productos={productos} onReservar={() => handleReservar(productos.nombre2)} />
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