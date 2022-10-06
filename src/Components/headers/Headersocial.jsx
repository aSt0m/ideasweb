

import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import './headers.css'

export const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a className="header__socials-icons" href="https://facebook.com" target='_blank' ><BsFacebook/></a>
        <a className="header__socials-icons" href="https://telegram.com" target="_blank" ><RiInstagramFill/></a>
        <a className="header__socials-icons" href="https://www.twitter.com" target="_blank" ><BsTwitter/></a>
    </div>
  )
}