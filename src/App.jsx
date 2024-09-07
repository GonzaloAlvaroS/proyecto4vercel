import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useLocation } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar"
import Principal from "./Components/Principal/Principal"
import LineaInfo from "./Components/LineaInfo/LineaInfo"
import Servicio1 from "./Components/Servicio1/Servicio1"
import Servicio2 from "./Components/Servicio2/Servicio2"
import Servicio3 from "./Components/Servicio3/Servicio3"
import Servicio4 from "./Components/Servicio4/Servicio4";
import Partebaja from "./Components/Partebaja/Partebaja";

import InfoEmpresa from "./Paginas/QuienesSomos/InfoEmpresa/InfoEmpresa";
import Metodos2 from "./Paginas/QuienesSomos/Metodos2/Metodos2";
import InfoEmpresa2 from "./Paginas/QuienesSomos/InfoEmpresa2/InfoEmpresa2";

import Explicacion from "./Paginas/ComoFunciona/Explicacion/Explicacion";
import MetodoUno from "./Paginas/ComoFunciona/MetodoUno/MetodoUno";
import MetodoDos from "./Paginas/ComoFunciona/MetodoDos/MetodoDos";
import MetodoTres from "./Paginas/ComoFunciona/MetodoTres/MetodoTres";
import Conclusion from "./Paginas/ComoFunciona/Conclusion/Conclusion";

import Introduccion from './Paginas/ComoEmpezar/Introduccion/Introduccion';
import Contacto from './Paginas/ComoEmpezar/Contacto/Contacto';
import PreguntaFAQ from './Paginas/ComoEmpezar/PreguntaFAQ/PreguntaFAQ';

import FAQ from './Paginas/FAQ/FAQ/FAQ';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ pathname ]); 

  return null;
}


const App = () => {

  return (
    <Router basename="/">
     <ScrollToTop/>
     <Navbar/>
     <Routes>
     <Route path="/" element={
     <div>
     <Principal/>
     <LineaInfo/>
     <Servicio1/>
     <Servicio2/>
     <Servicio3/>
     <Servicio4/>
     </div>
     }/>
    <Route path="quienes-somos" element={
    <div>
    <InfoEmpresa/>
    <Metodos2/>
    <InfoEmpresa2/>
    </div>
     }/>
    <Route path="como-funciona" element={
    <div>
    <Explicacion/>
    <MetodoUno/>
    <MetodoDos/>
    <MetodoTres/>
    <Conclusion/>
    </div>
     }/>
    <Route path="como-empezar" element={
    <div>
    <Introduccion/>
    <Contacto/>
    <PreguntaFAQ/>
    </div>
     }/>
    <Route path="preguntas-frecuentes" element={
    <div>
    <FAQ/>
    </div>
     }/>
   </Routes>
   <Partebaja/>
   </Router>
  )
}

export default App




