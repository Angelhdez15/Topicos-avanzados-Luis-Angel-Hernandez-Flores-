import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Home} from "../page"
import { Layout } from '../layouts'
import {Login} from '../components/iniciosesion/Iniciosesion'
import { Registro } from '../components/inicio/Registro/Registro'
import { Productos } from '../components/Formularios/Productos'
import { Productos2 } from '../components/inicio/Actividades/Homeactividades/Act'
import { Transporte } from '../components/Productos/HomeProductos/Transportes'
import { RecTransporte } from '../components/Productos/itemProductos/recrtrnasp'
import { Comida } from '../components/Comidas/ComidasGestion/ComidasGes'
import { ComidaUsu} from '../components/Comidas/ComidasUsuario/ComidUsu'
import { UsuariosGes } from '../components/inicio/Registro/UsuariosGes'

export function Rutas() {
    const Layouts = (Layout, Page) => (
        <Layout>
          <Page />
        </Layout>
    )
  return (
    
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/home" element={Layouts(Layout,Home)}/>
         <Route path="/registro" element={<Registro/>} />
         <Route path="/formproducto" element={Layouts(Layout,Productos)} />
         <Route path="/list" element={Layouts(Layout,Productos2)} />
         <Route path="/transp" element={Layouts(Layout,Transporte)} />
         <Route path="/visttransp" element={Layouts(Layout,RecTransporte)} />
         <Route path="/Geacomida" element={Layouts(Layout,Comida)} />
        <Route path="/Usucomida" element={Layouts(Layout,ComidaUsu)} />
        <Route path="/Usuarios" element={Layouts(Layout,UsuariosGes)} />

    </Routes>
    
  )
}
