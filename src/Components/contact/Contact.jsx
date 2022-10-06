


import React from 'react'
import './contact.css'
import { SiGmail } from 'react-icons/si'
import { SiMessenger } from 'react-icons/si'
import { RiWhatsappLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'





export const Contact = () => {
  
  const form = useRef();
  
  const MySwal = withReactContent(Swal)
  const sendEmail = (e) => {
    e.preventDefault();
    
    // emailjs.sendForm('service_y0b5l7v', 'template_hc0spx5', form.current, 'ImYIkkltNoMFy3l11')
    emailjs.sendForm('service_md6owur', 'template_qjx7jxe', form.current, 'Mc-BxCmp6KzqG74cD')
      .then((result) => {
          console.log(result.text);
          MySwal.fire('Tu información se ha enviado con exito','Nos pondremos en contacto a la brevedad','success')
        }, (error) => {
          console.log(error.text);
          MySwal.fire('Hubo un error en el envio','Prueba mas tarde o utiliza otra opción de contacto','error')
          
      });
      e.target.reset()
    }

  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>Contactanos</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon btn-gmail'/>
            <h4 className="contact__title">tomtrejodev@gmail</h4>
            <h5 className="contact__user">ideasweb@gmail.com</h5>
            <a className='contact__option-link' href="mailto:tomtrejodev@gmail.com" target="_blank" rel='noreferrer'>Send message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon btn-messenger'/>
            <h4 className="contact__title">Messenger</h4>
            <h5 className="contact__user">me/m/ideasweb</h5>
            <a className='contact__option-link' href="https://m.me/tomtrejog" target="_blank" rel='noreferrer'>Send message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon btn-whats'/>
            <h4 className="contact__title">Whatsapp</h4>
            <h5 className="contact__user">5512345678</h5>
            <a className='contact__option-link' href="https://api.whatsapp.com/send?phone=5512345678" target="_blank" rel='noreferrer'>Send message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your name' required />
          <input type="mail" name='email' placeholder="Your e-mail" required/>
          <textarea name="message"  rows="10" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary '>Send Message</button>
        </form>
      </div>
    </section>
  )
}
