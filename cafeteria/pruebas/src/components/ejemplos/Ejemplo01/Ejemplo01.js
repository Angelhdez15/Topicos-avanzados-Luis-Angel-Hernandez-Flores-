import React, {useState} from 'react'
import { Ejemplo02 } from '../Ejemplo02';
import "./Ejemplo01.scss"
//hooks useSates
export  function Ejemplo01() {
  const [contador, setContador]=useState(0);

  const incrementarvalor=()=>{
    setContador(contador+1)
  }
  const decrementarvalor=()=>{
    setContador(contador+-1)
  }
  const fondo={
    tema:{
      backgroundColor:'black',
      color:'red'
    }
  }
  return (
    <div>
   <Ejemplo02 contador={contador} incrementar={incrementarvalor} decrementar={decrementarvalor} fondo={fondo}/>
    </div>
  )
}

