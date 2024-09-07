import React, { useEffect, useRef } from 'react';
import "./Servicio1.css"
import manosestrechadas from "../../assets/manosestrechadas.png"


const Servicio1 = () => {

  const refs = {
    linea1: useRef(null),
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

    const observer = new IntersectionObserver(handleScroll, { threshold: 1 });

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
  
    <div ref={refs.linea1} className='servicio1'>
      <div className="servicio1-left">
        <img src={manosestrechadas} alt="" className='imagen'/>
      </div>
      <div className="servicio1-right">
        <h2>Los negocios del futuro</h2>
        <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
        <h3>¿Listo para empezar a crear un futuro?</h3>
      </div>
    </div>
  )
}

export default Servicio1
