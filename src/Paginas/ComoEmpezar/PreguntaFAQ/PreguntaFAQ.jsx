import React from 'react'
import "./PreguntaFAQ.css"
import { useNavigate } from 'react-router-dom';


const PreguntaFAQ = () => {

  const navigate = useNavigate();

  const FAQ = () => {
    navigate('../preguntas-frecuentes'); 
  };

return (

    <div className='preguntafaq'>
      <h1>¿Aun no sabe como enviar un email optimo para presentar su empresa?</h1>
      <button className='btn' onClick={FAQ}>VER FAQ</button>
    </div>
    
  )
}

export default PreguntaFAQ
