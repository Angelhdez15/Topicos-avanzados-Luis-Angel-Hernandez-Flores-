import React from 'react';
import { Tabs, Tab } from "react-bootstrap";
import { datos } from '../../../utils/Bd';
import {ItemProductos} from '../itemProductos/ItemProducto'
import {Row,Col} from "react-bootstrap"
import "./HomeProductos.scss";

export function HomeProductos() {
  const fondo={
    tema:{
      backgroundColor:'black',
      color:"white",
      fontSize:'20px'
    }
  }
  return (
    <div className='container' style={fondo.tema}>
      <Tabs 
      defaultActiveKey="profile" 
      id="fill-tabs-example" 
      className="mb-3"
      fill
      >

        <Tab eventKey="profile" title="Lista de Productos">
          
        <Row xs={1} md={3} lg={4}>
          {datos.map((producto,index)=>(
              <Col>
              <div className="p-2">
              <ItemProductos key={index} producto={producto}/>              
             </div>
            </Col>
           ))}
          </Row>
          </Tab>
      </Tabs>
      </div>
  );
}
