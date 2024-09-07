import React from 'react'
import "./Servicio4.css"
import { useNavigate } from 'react-router-dom';
import instalaciones from "../../assets/instalaciones.mp4"

const Servicio4 = () => {

  const navigate = useNavigate();

  const ComoEmpezar = () => {
    navigate('como-empezar'); 
  };

return (
    <div className='servicio4'>
      <h1>-NO PIERDAS LA OPORTUNIDAD DE CRECER-</h1>
      <video src={instalaciones}  width={710} height={400} muted autoPlay controls></video>
      <button className='btn btnunete' onClick={ComoEmpezar}>¡UNIRSE AHORA!</button>
    </div>
  )
}

export default Servicio4
