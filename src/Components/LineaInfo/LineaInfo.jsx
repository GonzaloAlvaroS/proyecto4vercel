import React from 'react'
import "./LineaInfo.css"
import logolinea1 from "../../assets/logolinea1.png"
import logolinea2 from "../../assets/logolinea2.png"
import logolinea3 from "../../assets/logolinea3.png"
import logolinea4 from "../../assets/logolinea4.png"
import logolinea5 from "../../assets/logolinea5.png"
import logolinea6 from "../../assets/logolinea6.png"

const LineaInfo = () => {
  
return (
  
    <div className='lineainfo'>
      <div className="lineainfo-imagenes">
        <img src={logolinea1} alt="" />
        <img src={logolinea2} alt="" />
        <img src={logolinea3} alt="" />
        <img src={logolinea4} alt="" />
        <img src={logolinea5} alt="" />
        <img src={logolinea6} alt="" /> 
      </div>
    </div>
  )
}

export default LineaInfo
