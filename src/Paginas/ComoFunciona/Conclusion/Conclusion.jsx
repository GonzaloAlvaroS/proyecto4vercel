import React from 'react'
import "./Conclusion.css"
import { useNavigate } from 'react-router-dom';

const Conclusion = () => {

  const navigate = useNavigate();

  const ComoEmpezar = () => {
    navigate('../como-empezar'); 
  };

return (
    <div className='conclusion'>
      <h2>Ya leiste los 3 metodos principales, pero hay mas...</h2>
      <h1>¿QUE ESPERAS PARA EMPEZAR A FORJAR EL FUTURO DE TU EMPRESA?</h1>
      <button className='btn btnunete' onClick={ComoEmpezar}>¡UNIRSE AHORA!</button>
    </div>
    
  )
}

export default Conclusion
