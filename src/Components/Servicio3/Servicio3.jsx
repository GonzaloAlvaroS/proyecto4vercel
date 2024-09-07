import React from 'react'
import "./Servicio3.css"
import opcionafiliacion from "../../assets/opcionafiliacion.png"
import opcionmarketing from "../../assets/opcionmarketing.png"
import opcioninvertir from "../../assets/opcioninvertir.png"


const Servicio3 = () => {

return (
    <div className='servicio3'>
      <div className='servicio3-texto'>
        <h2>Empecemos a crear un futuro para ti</h2>
        <h1>Multiples opciones para impulsar tu negocio</h1>
      </div>
        <div className="servicio3-imagenes">
          <div className='servicio3-imagen1'>
            <img src={opcionafiliacion} alt="" className='imagenz1'/>
              <div className='servicio3-imagen1texto'>
                <p>Afiliación</p>
              </div>
          </div>
          <div className='servicio3-imagen1'>
            <img src={opcionmarketing} alt="" className='imagenz2'/>
              <div className='servicio3-imagen1texto'>
                <p>Marketing</p>
              </div>
          </div>
          <div className='servicio3-imagen1'>
            <img src={opcioninvertir} alt="" className='imagenz3'/>
              <div className='servicio3-imagen1texto'>
                <p>Inversión</p>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Servicio3
