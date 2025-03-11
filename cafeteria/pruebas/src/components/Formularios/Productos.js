import React,{useState} from 'react'
import {Form,Row,Col,InputGroup,Button} from "react-bootstrap"
import {validationSchema,initialValues } from './Productos.form'
import {useFormik} from 'formik'
import { ListProductos } from '../ListProductos'
import { Table } from 'react-bootstrap'

export function Productos() {

/*     const Datos={
        Producto:"",
        Precio:"",
        Cantidad:"",
        Unidad:"",
        imagen:""
    } */
    const [valores,setvalores]=useState()
    const [informacion,setInformacion]=useState([])
    const formik=useFormik({
        initialValues:initialValues(),
        validationSchema:validationSchema(),
        onSubmit:(formvalue)=>{
            console.log(formvalue);
        }
    })

/*     const onChange=(e)=>{
        const {name,value}=e.target
        setvalores({...valores,[name]:value})
    } */

/*     const enviarDatos=(e)=>{
   e.preventDefault()
   console.log(valores);
   
    } */
  return (
    <div className='p-4'>
       <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Producto" 
            name='Producto'
            value={formik.values.Producto}
            onChange={formik.handleChange}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
            required 
            type="number" 
            name='Precio'
            value={formik.values.Precio}
            placeholder="Precio" 
            onChange={formik.handleChange}/>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Cantidad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control 
              type="number" 
              placeholder="Cantidad" 
              name='Cantidad'
              value={formik.values.Cantidad}
              onChange={formik.handleChange}/>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Unidad</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Unidad" 
            name='Unidad'
            value={formik.values.Unidad}
            onChange={formik.handleChange}/>
          </Form.Group>  
          <Form.Group as={Col} md="3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control 
            type="file" 
            required 
            name='imagen'
            value={formik.values.imagen}
            onChange={formik.handleChange}/>
            </Form.Group>      
        </Row>
       
        <Button type="submit">Enviar</Button>
      </Form>
      <Row>
       <ListProductos/>
      </Row>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>imagen</th>
          <th>Editar</th>
          <th>Eliminar</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Galleta</td>
          <td>$15.00</td>
          <td>15</td>
          <td>250 g</td>
          <td>imagen</td>
          <td><Button variant="success">Editar</Button></td>
          <td><Button variant='danger'>Eliminar</Button></td>

        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
  )
}
