import React, { useState, useEffect } from "react";
import {  Row} from "react-bootstrap";
import { ComidaAPI } from "../../../api/Comidas";
import { LisComUsu } from "./LisComUsu";

const ctrComidas = new ComidaAPI();

export function ComidaUsu() {
  const [listaComidass, setListaComidass] = useState([]);

  const obtenerComidass = async () => {
    try {
      const listaPro = await ctrComidas.getComida();
      console.log("Comidas obtenidas:", listaPro);
      setListaComidass(listaPro);
    } catch (error) {
      console.error("Error al obtener comidas:", error);
    }
  };

  useEffect(() => {
    obtenerComidass();
  }, []);

  return (
    <div className="p-4">
      <Row>
        <LisComUsu Comidas={listaComidass} />
      </Row>
    </div>
  );
}
