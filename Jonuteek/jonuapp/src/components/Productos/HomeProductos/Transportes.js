import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { initialValues, validationSchema } from "./Transporte.form";
import { TransporteAPI } from "../../../api/Transporte";
import { Listtransportes } from "./ListTransporte";

const ctrProducto = new TransporteAPI();

export function Transporte() {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");
  const [productoEditando, setProductoEditando] = useState(null);

  const obtenerProductos = async () => {
    try {
      const listaPro = await ctrProducto.getProducto();
      console.log("Productos obtenidos:", listaPro);
      setListaProductos(listaPro);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("Datos enviados:", formValue);

        if (productoEditando) {
          const actualizado = await ctrProducto.updateProducto(productoEditando._id, formValue);
          if (actualizado && actualizado._id) {
            setListaProductos((prevProductos) =>
              prevProductos.map((producto) =>
                producto._id === productoEditando._id ? { ...producto, ...actualizado } : producto
              )
            );
            obtenerProductos(); // Recargar productos después de la actualización
          }

          setProductoEditando(null);
          setMensajeExito("Producto actualizado correctamente");
        } else {
          const nuevoProducto = await ctrProducto.createProduct(formValue);
          setListaProductos((prevProductos) => [...prevProductos, nuevoProducto]);
          setMensajeExito("Producto agregado correctamente");
        }

        setTimeout(() => setMensajeExito(""), 3000);
        formik.resetForm();
        obtenerProductos();
      } catch (error) {
        console.error("Error al guardar producto:", error);
      }
    },
  });

  const eliminarProducto = async (id) => {
    try {
      console.log("Intentando eliminar producto con ID:", id);
      console.log("Lista actual de productos:", listaProductos);

      await ctrProducto.delProducto(id);
      setListaProductos((prevProductos) =>
        prevProductos.filter((producto) => producto._id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  const editarProducto = (producto) => {
    setProductoEditando(producto);
    formik.setValues({
        nombret: producto.nombret || "",
        preciot: producto.preciot || "",
        cantidadt: producto.cantidadt || "",
        unidadt: producto.unidadt || "",
        fechat: producto.fechat || "",
        horariot: producto.horariot || "",
        imagept: undefined, // No envíes null, deja el campo sin modificar
    });
};

  useEffect(() => {
    obtenerProductos();
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
            name="nombre"
            placeholder="nombret"
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
          {productoEditando ? "Actualizar" : "Enviar"}
        </Button>
      </Form>

      <Row>
        <Listtransportes transportes={listaProductos} onEliminar={eliminarProducto} onEditar={editarProducto} />
      </Row>
    </div>
  );
}
