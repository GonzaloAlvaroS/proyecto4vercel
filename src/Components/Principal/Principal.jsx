import React from 'react'
import "./Principal.css"
import personaprincipal from "../../assets/personaprincipal.png"
import videonegocios from "../../assets/videonegocios.mp4"


const Principal = () => {

return (

    <div className='principal'>
      <div className="principal-left">
        <h1 className='principal-left-texto'>Apoyamos a mas de <span className='color500'>500</span> brillantes negocios para que puedan prosperar. Es tu turno de ser uno de ellos.</h1>
        <video src={videonegocios} width={500} controls muted autoPlay></video>
      </div>
      <div className='principal-right'>
        <img src={personaprincipal} alt="" />
      </div>
    </div>
  )
}

export default Principal