import React from 'react'
import "./MetodoDos.css"
import instalaciones from "../../../assets/instalaciones.mp4"

const MetodoUno = () => {

return (

    <div className='metododos'>
      <div className="metododos-text">
        <h1 className='titulometododos'>- Marketing -</h1>
        <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante. En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
      </div>
      <div className='metododos-video'>
        <video src={instalaciones} width={400} controls muted autoPlay></video>
      </div>
    </div>

  )
}

export default MetodoUno
