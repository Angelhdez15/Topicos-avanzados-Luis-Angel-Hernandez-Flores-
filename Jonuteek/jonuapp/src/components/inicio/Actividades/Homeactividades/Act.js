import React, { useState, useEffect } from "react";
import { Alert, Row } from "react-bootstrap";
import { Producto } from "../../../../api/producto";
import { Actividades } from "./Actividades";

const ctrProducto = new Producto();

export function Productos2() {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");

  const obtenerProductos = async () => {
    try {
      const listaPro = await ctrProducto.getProducto();
      console.log("Productos obtenidos:", listaPro);
      setListaProductos(listaPro);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="p-4">
      {mensajeExito && <Alert variant="success">{mensajeExito}</Alert>}

      <Row>
        <Actividades productos={listaProductos} />
      </Row>
    </div>
  );
}