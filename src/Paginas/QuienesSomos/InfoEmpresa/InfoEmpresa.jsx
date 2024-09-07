import React, { useEffect, useRef } from 'react';
import "./InfoEmpresa.css"
import empresaanimada from "../../../assets/empresaanimada.png"


const InfoEmpresa = () => {

  const refs = {
    textoinfoempresa: useRef(null),
    textoinfoempresa2: useRef(null),
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

    <div className='infoempresa'>
      <div className='tituloinfoempresa'>
        <h1></h1>
      </div>
        <div className='infoempresainfo'>
          <div ref={refs.textoinfoempresa2} className="infoempresa-right">
            <img src={empresaanimada} alt="" className='imagen-infoempresa'/>
          </div>
          <div ref={refs.textoinfoempresa} className="infoempresa-left">
            <h3>Fuimos pequeños y nos ayudaron a crecer. Es nuestro turno de hacerlo.</h3>
            <h2>THE WHITE COMPANY</h2>
            <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante. En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
          </div>
        </div>
    </div>
  )
}

export default InfoEmpresa
