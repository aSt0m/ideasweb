import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { FiTwitter} from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>IdeasWeb</a> */}
      <h1 className='brand'><span className='brand-span'>I</span>deas<span className='brand-span'>W</span>eb</h1>
      <ul className='permalinks'>
        <li className='permalink-link'><a href="#">Home</a></li>
        <li className='permalink-link'><a href="#about">About</a></li>
        <li className='permalink-link'><a href="#experience">Experience</a></li>
        <li className='permalink-link'><a href="#services">Services</a></li>
        <li className='permalink-link'><a href="#portfolio">Portfolio</a></li>
        <li className='permalink-link'><a href="#testimonials">Testimonials</a></li>
        <li className='permalink-link'><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a className='footer__social-icon' href="https://facebook.com"><BsFacebook/></a>
        <a className='footer__social-icon' href="https://twitter.com"><FiTwitter/></a>
        <a className='footer__social-icon' href="https://telegram.com"><FaTelegram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; IdeasWeb</small>
      </div>
    </footer>
  )
}
