import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { initialValues, validationSchema } from "./Comidas.form";
import { ComidaAPI } from "../../../api/Comidas";
import { ListComida } from "./ListComidas";

const ctrComidas = new ComidaAPI();

export function Comida() {
  const [listaComidass, setListaComidass] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");
  const [ComidasEditando, setComidasEditando] = useState(null);

  const obtenerComidass = async () => {
    try {
        const listaPro = await ctrComidas.getComida(); // Cambiado a getComida
        console.log("Comidas obtenidos:", listaPro);
        setListaComidass(listaPro);
    } catch (error) {
        console.error("Error al obtener Comidas:", error);
    }
};

const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: async (formValue) => {
    try {
      if (ComidasEditando) {
        const actualizado = await ctrComidas.updateComida(ComidasEditando._id, formValue);
        if (actualizado && actualizado._id) {
          setListaComidass((prevComidass) =>
            prevComidass.map((Comidas) =>
              Comidas._id === ComidasEditando._id ? { ...Comidas, ...actualizado } : Comidas
            )
          );
          setMensajeExito("Comida actualizado correctamente."); // Mensaje de éxito
        }
      } else {
        const nuevoComidas = await ctrComidas.createComida(formValue);
        setListaComidass((prevComidass) => [...prevComidass, nuevoComidas]);
        setMensajeExito("Comida creado correctamente."); // Mensaje de éxito
      }
      setTimeout(() => setMensajeExito(""), 3000); // Limpia el mensaje después de 3 segundos
    } catch (error) {
      console.error("Error al guardar Comida:", error);
    }
  },
});

const eliminarComidas = async (id) => {
    try {
      console.log("Eliminando comida con ID:", id); // Depuración
      await ctrComidas.delComida(id);
      setListaComidass((prevComidass) =>
        prevComidass.filter((Comidas) => Comidas._id !== id)
      );
      setMensajeExito("Comida eliminado correctamente.");
      setTimeout(() => setMensajeExito(""), 3000);
    } catch (error) {
      console.error("Error al eliminar Comida:", error);
    }
  };
  const editarComidas = (Comidas) => {
    setComidasEditando(Comidas);
    formik.setValues({
        nombreC: Comidas.nombreC || "",
        precioC: Comidas.precioC || "",
        cantidadC: Comidas.cantidadC || "",
        imageC: undefined, // No envíes null, deja el campo sin modificar
    });
};

  useEffect(() => {
    obtenerComidass();
  }, []);

  return (
    <div className="p-4">
      {mensajeExito && <Alert variant="success">{mensajeExito}</Alert>}

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Nombre del Comida</Form.Label>
            <Form.Control
            type="text"
            name="nombreC"
            placeholder="nombre de la Comida o agua"
            value={formik.values.nombreC}
            onChange={formik.handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
       
          <Form.Group as={Col} md="3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precioC"
              placeholder="Precio"
              value={formik.values.precioC}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                name="cantidadC"
                placeholder="Cantidad"
                value={formik.values.cantidadC}
                onChange={formik.handleChange}
              />
            </InputGroup>
                    </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="imageC"
              onChange={(event) =>
                formik.setFieldValue("imageC", event.currentTarget.files[0])
              }
            />
          </Form.Group>
        </Row>
        <Button type="submit">
          {ComidasEditando ? "Actualizar" : "Enviar"}
        </Button>
      </Form>

      <Row>
        <ListComida Comidas={listaComidass} onEliminar={eliminarComidas} onEditar={editarComidas} />
      </Row>
    </div>
  );
}
