import React from 'react'
import {HomeProductos} from "../components/Productos"
import {Routes,Route} from "react-router-dom"
import {Home} from "../page"
import { Layout } from '../layouts'
import { Actividades } from '../components/inicio/Actividades/Homeactividades'

export function Rutas() {
    const Layouts = (Layout, Page) => (
        <Layout>
          <Page />
        </Layout>
    )
  return (
    
    <Routes>
        <Route path="/" element={Layouts(Layout,Home)}/>
         <Route path="/producto" element={Layouts(Layout, HomeProductos)} />
         <Route path="/actividades" element={Layouts(Layout, Actividades)} />
    </Routes>
    
  )
}
