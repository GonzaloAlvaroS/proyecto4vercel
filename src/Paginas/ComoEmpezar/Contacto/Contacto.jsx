import React from 'react'
import "./Contacto.css"
import msg_icon from "../../../assets/msg-icon.png"
import mail_icon from "../../../assets/mail-icon.png"
import phone_icon from "../../../assets/phone-icon.png"
import white_arrow from "../../../assets/white-arrow.png"

const Contacto = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "afb6c939-ba2d-4b30-8824-20ecf958a881");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("¡Email enviado correctamente!");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

return (

    <div className='contact'>
      <div className="contact-col">
        <h3>Mandamos un email con tu proyecto <img src={msg_icon} alt="" /></h3>
        <p>Asegurarse de mandar un email profesional. Debe seguir todas las reglas y pasos para que podamos aceptar su proyecto y empezar a crecer juntos. Si no se cumple alguna de las reglas, ignoraremos su email. Para mas informacion por favor leer el FAQ en el cual encontrará todos los pasos a seguir para poder contactar con nosotros.</p>
        <ul>
          <li><img src={mail_icon} alt="" />info@thewhitecompany.com</li>
          <li><img src={phone_icon} alt="" />+1 932930112</li>
        </ul>
      </div>
      <div className="contact-col contacto2">
        <form onSubmit={onSubmit}>
            <label>Tu nombre</label>
            <input type="text" name='name' placeholder='Ingresa tu nombre' required/>
            <label>Numero de telefono</label>
            <input type="tel" name='phone' placeholder='Ingresa tu numero' required/>
            <label>Escribe tus sugerencias aqui</label>
            <textarea name="message" rows="6" placeholder='Ingresa tu mensaje' required></textarea>
            <button type='submit' className='btn dark-btn'>Mandar <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  
  )
}

export default Contacto
