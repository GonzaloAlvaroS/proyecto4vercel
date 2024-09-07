import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import logo from "../../assets/logo.png" 
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

    const[sticky, setSticky] = useState(false)

    useEffect(()=>{
      window.addEventListener("scroll", ()=>{
        window.scrollY > 15 ? setSticky(true) : setSticky(false)
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
}

const navigate = useNavigate();

  const Principal = () => {
    navigate('/'); 
  };
  const FAQ = () => {
    navigate('preguntas-frecuentes'); 
  };

return (

     <nav className={`container ${sticky? "dark-nav" : ""}`}>   
      <img src={logo} alt="" className='logo' onClick={Principal}/>
      <ul className={mobileMenu?"":"hide-mobile-menu"}>
        <li><Link to="principal" smooth={true} offset={0} duration={500}>MENU</Link></li>
        <li><Link to="servicio1" smooth={true} offset={-190} duration={500}>MISIÓN</Link></li>
        <li><Link to="servicio2" smooth={true} offset={-140} duration={500}>DUDAS</Link></li>
        <li><Link to="servicio3" smooth={true} offset={-110} duration={500}>MÉTODOS</Link></li>
        <li><Link to="servicio4" smooth={true} offset={-100} duration={500}>INSTALACIONES</Link></li>
        <li className="palabrafaq" smooth={true} offset={-70} duration={500} onClick={FAQ}>FAQ</li> 
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar