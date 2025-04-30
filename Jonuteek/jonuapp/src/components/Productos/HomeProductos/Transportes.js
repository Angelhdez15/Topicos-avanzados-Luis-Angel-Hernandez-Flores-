import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { initialValues, validationSchema } from "./Transporte.form";
import { TransporteAPI } from "../../../api/Transporte";
import { Listtransportes } from "./ListTransporte";

const ctrtransportes = new TransporteAPI();

export function Transporte() {
  const [listatransportess, setListatransportess] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");
  const [transportesEditando, settransportesEditando] = useState(null);

  const obtenertransportess = async () => {
    try {
        const listaPro = await ctrtransportes.getTransporte(); // Cambiado a getTransporte
        console.log("Transportes obtenidos:", listaPro);
        setListatransportess(listaPro);
    } catch (error) {
        console.error("Error al obtener transportes:", error);
    }
};

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: async (formValue) => {
    try {
      if (transportesEditando) {
        const actualizado = await ctrtransportes.updateTransporte(transportesEditando._id, formValue);
        if (actualizado && actualizado._id) {
          setListatransportess((prevtransportess) =>
            prevtransportess.map((transportes) =>
              transportes._id === transportesEditando._id ? { ...transportes, ...actualizado } : transportes
            )
          );
          setMensajeExito("Transporte actualizado correctamente."); // Mensaje de éxito
        }
      } else {
        const nuevotransportes = await ctrtransportes.createTransporte(formValue);
        setListatransportess((prevtransportess) => [...prevtransportess, nuevotransportes]);
        setMensajeExito("Transporte creado correctamente."); // Mensaje de éxito
      }
      setTimeout(() => setMensajeExito(""), 3000); // Limpia el mensaje después de 3 segundos
    } catch (error) {
      console.error("Error al guardar transporte:", error);
    }
  },
});

const eliminartransportes = async (id) => {
  try {
    await ctrtransportes.delTransporte(id); // Llama al método de la API
    setListatransportess((prevtransportess) =>
      prevtransportess.filter((transportes) => transportes._id !== id)
    );
    setMensajeExito("Transporte eliminado correctamente."); // Mensaje de éxito
    setTimeout(() => setMensajeExito(""), 3000); // Limpia el mensaje después de 3 segundos
  } catch (error) {
    console.error("Error al eliminar transporte:", error);
  }
};
  const editartransportes = (transportes) => {
    settransportesEditando(transportes);
    formik.setValues({
        nombret: transportes.nombret || "",
        preciot: transportes.preciot || "",
        cantidadt: transportes.cantidadt || "",
        unidadt: transportes.unidadt || "",
        fechat: transportes.fechat || "",
        horariot: transportes.horariot || "",
        imagept: undefined, // No envíes null, deja el campo sin modificar
    });
};

  useEffect(() => {
    obtenertransportess();
  }, []);

  return (
    <div className="p-4">
      {mensajeExito && <Alert variant="success">{mensajeExito}</Alert>}

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Nombre del Transporte</Form.Label>
            <Form.Control
            type="text"
            name="nombret"
            placeholder="nombre del transporte"
            value={formik.values.nombret}
            onChange={formik.handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
       
          <Form.Group as={Col} md="3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="preciot"
              placeholder="Precio"
              value={formik.values.preciot}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                name="cantidadt"
                placeholder="Cantidad"
                value={formik.values.cantidadt}
                onChange={formik.handleChange}
              />
            </InputGroup>
            <Row className="mb-3">
      <Form.Group as={Col} md="6">
    <Form.Label>Fecha</Form.Label>
    <Form.Control
      type="date"
      name="fechat"
      value={formik.values.fechat}
      onChange={formik.handleChange}
    />
  </Form.Group>
  <Form.Group as={Col} md="6">
    <Form.Label>Horario</Form.Label>
    <Form.Control
      type="time"
      name="horariot"
      value={formik.values.horariot}
      onChange={formik.handleChange}
    />
  </Form.Group>
            </Row>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="imagept"
              onChange={(event) =>
                formik.setFieldValue("imagept", event.currentTarget.files[0])
              }
            />
          </Form.Group>
        </Row>
        <Button type="submit">
          {transportesEditando ? "Actualizar" : "Enviar"}
        </Button>
      </Form>

      <Row>
        <Listtransportes transportes={listatransportess} onEliminar={eliminartransportes} onEditar={editartransportes} />
      </Row>
    </div>
  );
}
