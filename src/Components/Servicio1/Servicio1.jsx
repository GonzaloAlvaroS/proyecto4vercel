import React from 'react';
import "./Servicio1.css"
import manosestrechadas from "../../assets/manosestrechadas.png"


const Servicio1 = () => {

return (
  
    <div className='servicio1'>
      <div className="servicio1-left">
        <img src={manosestrechadas} alt="" className='imagen'/>
      </div>
      <div className="servicio1-right">
        <h2>Los negocios del futuro</h2>
        <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
        <h3>¿Listo para empezar a crear un futuro?</h3>
      </div>
    </div>
  )
}

export default Servicio1

