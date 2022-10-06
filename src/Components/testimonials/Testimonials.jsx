import React from 'react'
import "./testimonials.css"
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import { FaQuoteLeft } from 'react-icons/fa'

// import Swiper core and required modules
import {  Pagination, Autoplay,EffectCoverflow  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: avatar1,
    name: "Nancy Vargas",
    review: "Muy buen servicio y atención. Captaron mi idea desde el primer momento, facilitando la puesta online de la web, y con un alto grado de atención al cliente."    
  },
  {
    avatar: avatar2,
    name: "Ivan Cerna",
    review: "Tanto el servicio como la calidad del producto final fueron excelentes, mis solicitudes fueron atendidas de manera inmediata por un equipo profesional con sobresaliente actitud."    
  },
  {
    avatar: avatar3,
    name: "Erick Fernández G.",
    review: "La atención brindada por su equipo fue muy buena, los tiempos de entrega, la calidad y disposición del trabajo cumplen con el objetivo principal. Estamos iniciando esta nueva etapa con la página web y esperamos ver muy buenos resultados pronto."
  },
  {
    avatar: avatar4,
    name: "Alejandro Mejía",
    review: "Trabajo de excelente calidad, impecable servicio al cliente, realizado de manera rápida y tomando en consideración todas las necesidades y solicitudes del cliente. 100% recomendado!"    
  }
]

 
export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseñas de clientes</h5>
      <h2>Testimoniales</h2>
      <Swiper className="container testimonials__container"
      //install Swiper modules
      modules={[Pagination,Autoplay,EffectCoverflow]}
      spaceBetween={70}
      slidesPerView={1}
      navigation
      parameters={
        {loop: true}
      }
      loop={true}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        
      }}
      pagination={{ clickable: true }}
      >
 
         
         {
          
           data.map(({avatar,name,review}, index)=>{
             return(
               <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
              <h5 className="client__name">{name}</h5>
              <FaQuoteLeft/>
              <small className="client__review">{review}</small>
          </SwiperSlide>
            )
            
          })
        }

      </Swiper>
    </section>
  )
}
