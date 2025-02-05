import React from 'react'
import {Tabs,Tab} from "react-bootstrap"
import {ItemProductos} from "../itemProductos"
import { datos } from '../../../utils/Bd'
export function HomeProductos() {
  const fondo={
    tema:{
      backgroundColor:'blue',
      color:"while",
      fontSize:'20px'
    }
  }
  return (
    <div className='container' style={fondo.tema}>
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="Lista de Productos">
    <div className="mt-3">
            {
              datos.map((producto, index) => (
                <ItemProductos
                  key={index} 
                  nombre={producto.nombre}
                  precio={producto.precio}
                  cantidad={producto.cantidad}
                  unidad={producto.unidad}
                />
              ))
            }
          </div>
    </Tab>
  </Tabs>
    </div>
  )
}
