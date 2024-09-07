import React from 'react'
import "./Partebaja.css"
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import instagramlogo from "../../assets/instagramlogo.png"
import facebooklogo from "../../assets/facebooklogo.png"


const Partebaja = () => {
  const handleButtonClick = () => {
    window.open('https://www.instagram.com/knoweats/', '_blank');
  };
  const handleButtonClick2 = () => {
    window.open('https://www.facebook.com/Knoweats/', '_blank');
  };

  const navigate = useNavigate();

  const QuienesSomos = () => {
    navigate('quienes-somos'); 
  };

  const ComoFunciona = () => {
    navigate('como-funciona');  
  };

  const ComoEmpezar = () => {
    navigate('como-empezar');  
  };

  const FAQ= () => {
    navigate('preguntas-frecuentes');  
  };

return (
  
    <div className='partebaja'>
      <div className='partebajainfo'>
        <div className='infobaja'>
          <img src={logo} alt="" className='partebajalogo'/>    
        </div>
      <div className='infobaja'>
        <h3>Empresa</h3>
        <p className='palabralinkpagina' onClick={QuienesSomos}><b>¿QUIÉNES SOMOS?</b></p>
        <p className='palabralinkpagina' onClick={ComoFunciona}><b>¿COMO FUNCIONA?</b></p>
        <p className='palabralinkpagina' onClick={ComoEmpezar}><b>¿COMO EMPEZAR?</b></p>
      </div>
      <div className='infobaja'>
        <h3>Información</h3>
        <p><Link to="servicio1" smooth={true} offset={-190} duration={500}>MISIÓN</Link></p>
        <p><Link to="servicio2" smooth={true} offset={-140} duration={500}>DUDAS</Link></p>
        <p><Link to="servicio3" smooth={true} offset={-110} duration={500}>MÉTODOS</Link></p>
        <p><Link to="servicio4" smooth={true} offset={-100} duration={500}>INSTALACIONES</Link></p>
        <p className='palabralinkpagina' onClick={FAQ}>FAQ</p>
      </div>
      <div className='infobaja'>
        <h3>Contacto</h3>
        <p>+1 932930112</p>
        <p>info@thewhitecompany.com</p>
          <div className='logoboton'>
            <img src={instagramlogo} alt="" onClick={handleButtonClick} />
            <img src={facebooklogo} alt="" onClick={handleButtonClick2}/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Partebaja
