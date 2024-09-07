import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Servicio2.css";

const Servicio2 = () => {
  const refs = {
    linea1: useRef(null),
    linea2: useRef(null),
    linea3: useRef(null),
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


return (
    <div className='servicio2'>
      <div ref={refs.linea1} className='servicio2linea1' onClick={QuienesSomos}>
        <div className="servicio2texto1">
          <h1>The White Company - ¿Quienes somos?</h1>
        </div>
      </div>
      <div ref={refs.linea2} className='servicio2linea2' onClick={ComoFunciona}>
        <div className="servicio2texto2">
          <h1>¿Como funciona el impulso de mi negocio?</h1>
        </div>
      </div>
      <div ref={refs.linea3} className='servicio2linea3' onClick={ComoEmpezar}>
        <div className="servicio2texto3">
          <h1>¿Como empezar a sacar adelante mi negocio?</h1>
        </div>
      </div>
    </div>
  );
}

export default Servicio2;


