import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, Row, Col, InputGroup, Alert } from "react-bootstrap"; // Importa Alert
import { initialValues, validationSchema } from "./Productos.form";
import { ListProductos } from "../ListProductos";
import { Producto } from "../../api";

const ctrProducto = new Producto();

export function Productos() {
  const [listaProductos, setListaProductos] = useState([]);
  const [mensajeExito, setMensajeExito] = useState(""); // Estado para el mensaje de éxito
  const [productoEditando, setProductoEditando] = useState(null); // Estado para el producto en edición


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("Datos enviados:", formValue); // Depuración
    
        if (productoEditando) {
          // Si hay un producto en edición, actualízalo
          const actualizado = await ctrProducto.updateProducto(productoEditando._id, formValue);
          console.log("Respuesta del servidor:", actualizado); // Depuración
    
          setListaProductos((prevProductos) =>
            prevProductos.map((producto) =>
              producto._id === productoEditando._id ? { ...producto, ...formValue } : producto
            )
          );
          setProductoEditando(null); // Limpia el estado de edición
          setMensajeExito("Producto actualizado correctamente");
        } else {
          // Si no hay producto en edición, crea uno nuevo
          const nuevoProducto = await ctrProducto.createProduct(formValue);
          setListaProductos((prevProductos) => [...prevProductos, nuevoProducto]);
          setMensajeExito("Producto agregado correctamente");
        }
        setTimeout(() => setMensajeExito(""), 3000);
        formik.resetForm(); // Limpia el formulario
      } catch (error) {
        console.error("Error al guardar producto:", error);
      }
    },
});

  const obtenerProductos = async () => {
    try {
      const listaPro = await ctrProducto.getProducto();
      console.log("Productos obtenidos:", listaPro);
      setListaProductos(listaPro);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
        await ctrProducto.delProducto(id); // Llama al método para eliminar el producto
        setListaProductos((prevProductos) =>
            prevProductos.filter((producto) => producto._id !== id) // Filtra por _id
      ); // Actualiza la lista de productos
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
};


const editarProducto = (producto) => {
  setProductoEditando(producto);
  formik.setValues({
    nombre: producto.nombre || "",
    precio: producto.precio || "",
    cantidad: producto.cantidad || "",
    unidad: producto.unidad || "",
    imagep: null, // La imagen no se puede previsualizar en un input file
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
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Producto"
              name="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
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
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Unidad</Form.Label>
            <Form.Control
              type="text"
              name="unidad"
              placeholder="Unidad"
              value={formik.values.unidad}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
  <Form.Label>Imagen</Form.Label>
  <Form.Control
    type="file"
    name="imagep" // Asegúrate de que el nombre coincida con el backend
    onChange={(event) =>
      formik.setFieldValue("imagep", event.currentTarget.files[0])
    }
  />
</Form.Group>
        </Row>

        <Button type="submit">
          {productoEditando ? "Actualizar" : "Enviar"}
        </Button>      </Form>

      <Row>
        <ListProductos productos={listaProductos} onEliminar={eliminarProducto} onEditar={editarProducto} />
      </Row>
    </div>
  );
}