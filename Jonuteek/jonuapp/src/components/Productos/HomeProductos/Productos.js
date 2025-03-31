import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap";
import { initialValues, validationSchema } from "./Productos.form";
import { ListProductos } from "../ListProductos/ListProductos";
import { Producto } from "../../api";

const ctrProducto = new Producto();

export function Productos() {
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
        ubicacion: producto.ubicacion || "",
        nombre: producto.nombre || "",
        precio: producto.precio || "",
        cantidad: producto.cantidad || "",
        unidad: producto.unidad || "",
        fecha: producto.fecha || "",
        horario: producto.horario || "",
        imagep: undefined, // No envíes null, deja el campo sin modificar
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
            <Form.Label>Nombre del Santuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="ubicacion"
              name="ubicacion"
              onChange={formik.handleChange}
              value={formik.values.ubicacion}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="3">
            <Form.Label>Nombre de la actividad</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              placeholder="Precio"
              value={formik.values.precio}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                name="cantidad"
                placeholder="Cantidad"
                value={formik.values.cantidad}
                onChange={formik.handleChange}
              />
            </InputGroup>
            <Row className="mb-3">
      <Form.Group as={Col} md="6">
    <Form.Label>Fecha</Form.Label>
    <Form.Control
      type="date"
      name="fecha"
      value={formik.values.fecha}
      onChange={formik.handleChange}
    />
  </Form.Group>
  <Form.Group as={Col} md="6">
    <Form.Label>Horario</Form.Label>
    <Form.Control
      type="time"
      name="horario"
      value={formik.values.horario}
      onChange={formik.handleChange}
    />
  </Form.Group>
            </Row>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="imagep"
              onChange={(event) =>
                formik.setFieldValue("imagep", event.currentTarget.files[0])
              }
            />
          </Form.Group>
        </Row>
        <Button type="submit">
          {productoEditando ? "Actualizar" : "Enviar"}
        </Button>
      </Form>

      <Row>
        <ListProductos productos={listaProductos} onEliminar={eliminarProducto} onEditar={editarProducto} />
      </Row>
    </div>
  );
}
