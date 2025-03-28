import React from 'react'
import {HomeProductos} from "../components/Productos"
import {Routes,Route} from "react-router-dom"
import {Home} from "../page"
import { Layout } from '../layouts'
import { Actividades } from '../components/inicio/Actividades/Homeactividades'
import {Login} from '../components/iniciosesion/Iniciosesion'
import { Registro } from '../components/inicio/Registro/Registro'
import { Productos } from '../components/Formularios/Productos'

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
         <Route path="/producto" element={Layouts(Layout, HomeProductos)} />
         <Route path="/actividades" element={Layouts(Layout, Actividades)} />
         <Route path="/registro" element={<Registro/>} />
         <Route path="/formproducto" element={Layouts(Layout,Productos)} />

    </Routes>
    
  )
}
