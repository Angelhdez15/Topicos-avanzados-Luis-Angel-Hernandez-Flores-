import React, { useState, useEffect } from "react";
import { Row, Alert } from "react-bootstrap";
import { TransporteAPI } from "../../../api/Transporte";
import { Vistransportes } from "./VistTransp";

const ctrtransportes = new TransporteAPI();

export function RecTransporte() {
  const [listatransportess, setListatransportess] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");

  const obtenertransportess = async () => {
    try {
      const listaPro = await ctrtransportes.getTransporte();
      console.log("Transportes obtenidos:", listaPro);
      setListatransportess(listaPro);
    } catch (error) {
      console.error("Error al obtener transportes:", error);
    }
  };

  useEffect(() => {
    obtenertransportess();
  }, []);

  return (
    <div className="p-4">
      {mensajeExito && <Alert variant="success">{mensajeExito}</Alert>}

      <Row>
        <Vistransportes transportes={listatransportess} />
      </Row>
    </div>
  );
}