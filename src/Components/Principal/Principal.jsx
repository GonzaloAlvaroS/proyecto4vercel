import React, { useEffect, useRef } from 'react';
import "./Principal.css"


const Principal = () => {

  const refs = {
    animacion: useRef(null),
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

    <div className='principal'>
      <div ref={refs.animacion} className='principaltexto'>
        <h1>THE WHITE COMPANY</h1>
        <p>Apoyamos a mas de <span className='color500'>500</span> brillantes negocios para que puedan prosperar. Es tu turno de ser uno de ellos.</p>
      </div>
    </div>
  )
}

export default Principal