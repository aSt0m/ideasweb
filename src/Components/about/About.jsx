
import React from 'react'
import './about.css'
import ME from '../../assets/img-ideas.png' 
import {TbAward} from 'react-icons/tb'
import {BiFolderOpen} from 'react-icons/bi'
import {HiOutlineUsers} from 'react-icons/hi'


export const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get to know</h5> */}
      <h2 className='title-section'>Nosotros</h2>
      <div className="container about__container">
         <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me-about" />
            </div>
         </div>
         <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <BiFolderOpen className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
          </div> */}
          <p>Somos una empresa donde creamos sitios web a la medida de tus necesidades, pero lo que nos interesa principalmente es crear conexiones entre tu marca y tus clientes, utilizando estrategias de marketing y herreamientas que nos ayudan a lograrlo  </p>
          <a href="*contact" className='btn btn-primary'>Platiquemos</a>
         </div>
      </div>
    </section>
  )
}
