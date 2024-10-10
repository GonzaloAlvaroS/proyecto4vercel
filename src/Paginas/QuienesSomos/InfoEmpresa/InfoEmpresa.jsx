import React from 'react';
import "./InfoEmpresa.css"
import empresaanimada from "../../../assets/empresaanimada.png"


const InfoEmpresa = () => {

return (

    <div className='infoempresa'>
      <div className='tituloinfoempresa'>
        <h1></h1>
      </div>
        <div className='infoempresainfo'>
          <div className="infoempresa-right">
            <img src={empresaanimada} alt="" className='imagen-infoempresa'/>
          </div>
          <div className="infoempresa-left">
            <h3>Fuimos pequeños y nos ayudaron a crecer. Es nuestro turno de hacerlo.</h3>
            <h2>THE WHITE COMPANY</h2>
            <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante. En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
          </div>
        </div>
    </div>
  )
}

export default InfoEmpresa
