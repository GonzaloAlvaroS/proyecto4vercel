import React, { useEffect, useRef } from 'react';
import "./Metodos2.css"
import apoyo from "../../../assets/apoyo.png"
import determinacion from "../../../assets/determinacion.png"
import compañerismo from "../../../assets/compañerismo.png"
import liderazgo from "../../../assets/liderazgo.png"


const Metodos2 = () => {

  const refs = {
    textometodo: useRef(null),
  };

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

return (

    <div className='metodos2'>
      <div ref={refs.textometodo} className='metodos2-texto'>
        <h2>Los valores son primordiales para hacer crecer un negocio</h2>
        <h1>Tenemos siempre en cuenta nuestros valores</h1>
      </div>
      <div className='metodos2-imagenestodo'>
        <div className="metodos2-imagenes1">
          <div className='metodos2-bloque'>
            <img src={apoyo} alt=""/>
            <button className='btncuadro'>Apoyo</button>
          </div>
          <div className='metodos2-bloque'>
            <img src={determinacion} alt="" className='imagenmetodo2'/>
            <button className='btncuadro'>Determinación</button>
          </div> 
        </div>
        <div className="metodos2-imagenes2">
          <div className='metodos2-bloque'>
            <img src={compañerismo} alt=""/>
            <button className='btncuadro'>Compañerismo</button>
          </div>
          <div className='metodos2-bloque'>
            <img src={liderazgo} alt="" className='imagenmetodo2'/>
            <button className='btncuadro'>Liderazgo</button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Metodos2
