
import React from 'react'
import './headers.css'
import { Cta } from './Cta'
import ME from '../../assets/1.png'
import { Headersocial } from './Headersocial'

export const Headers = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h5>Hi I'm</h5> */}
        <h1 className='brand'><span className='brand-span'>I</span>deas<span className='brand-span'>W</span>eb</h1>
        <h2 className="text-light">Sitios web personalizados, inovadores, creativos y efectivos</h2>
        <Cta />
        <Headersocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}
