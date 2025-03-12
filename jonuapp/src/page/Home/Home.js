import React from "react"
import "./Home.css"
import imag1 from"./imag1.jpg"
import imag2 from"./imag2.png"

export function Home() {
  return  <div className="home-container">
 <center><h1>¿En dónde se ubica Jonuteek?</h1></center> 
  <div className="content-section">
    <pre className="formatted-text">
    El Santuario del Manatí y aves migratorias, conocido como Jonuteek, se encuentra ubicado en el poblado Los Pájaros y Buchecos, en el municipio de Jonuta, en el estado de Tabasco
      Se debe destacar que en el recinto, habitan alrededor de 100 individuos, los que se podrán
      alimentar de manera responsable. El santuario se encuentra en las comunidades de Los Pájaros y
      Buchecos, ubicadas a dos horas de Villahermosa, capital de Tabasco.
      Entre los meses de marzo y julio, temporada en que escasean los alimentos por el período de
      sequía, las personas pueden acudir al lugar para convivir con la especie. Al iniciar las lluvias, es
      menos probable avistar a los ejemplares, debido a que el aumento en el cauce provoca que se
      retiren a otros puntos.
      <center> <a
          href="https://maps.app.goo.gl/efrbPhV29bVjSbBG7"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Ver ubicación en Google Maps
        </a> </center>
    </pre>
    <img src={imag1} alt="Descripción de la imagen" className="image-right" />

  </div>

 

<div className='home-container'>
 <center><h1>¿Que es Jonuteek?</h1></center> 
 <div className="content-section">
  <pre className="formatted-text">
  “La idea surge desde hace muchos años, antes de que sucediera la mortandad de los manatíes que fue noticia en México en el 2018; pero a raíz de eso queríamos demostrar que había otra alternativa a su rescate cuando se involucraba a las comunidades 
  en la protección y vigilancia de los mismos, que además de cuidarlos, tendrían un beneficio que les mejoraría la calidad de vida y por ello empezamos este proyecto en marzo del 2019, con excelentes resultados en pro del medio ambiente”.
  En el santuario Jonuteek, se puede convivir con esta hermosa especie y se cuenta con actividades recreativas 
  como paseos a caballo, senderismo, avistamiento de aves y un lugar para degustar las delicias gastronómicas de Tabasco.
  </pre>
  <img src={imag2} alt="Descripción de la imagen" className="image-right" />
 </div>
 </div >
 </div>
}
