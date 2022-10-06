

import React from 'react'
import './services.css'
import { RiCheckLine } from 'react-icons/ri'





export const Services = () => {
  return (
    <section id='services'>
      <h5>Que ofrecemos</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3 className='service__head-title'>UI/UX design</h3>
          </div>
          <ul className="service__list">
          <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul> 
        </article>
        <article className="service">
          <div className="service__head">
            <h3 className='service__head-title'>Web Development</h3>
          </div>
          <ul className="service__list">
          <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Optimizacion de sitio web</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Diseño receptivo de escritorio / móvil / tableta</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Enlaces a redes sociales</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Elementos interactivos</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Páginas únicas con un diseño elegante</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Integración de pasarelas de pago </p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3 className='service__head-title'>Content creation</h3>
          </div>
          <ul className="service__list">
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Creo tu negocio</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph"> Publicaciones optimizadas para SEO relevantes para el negocio (para fines de clasificación)</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph"> Obtener rango en Google Map en palabras clave específicas</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">BackLink con blogs relevantes de nicho T 2,3,4</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='service__list-content'>
              <RiCheckLine className='service__list-icons'/>
              <p className="service__list-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
