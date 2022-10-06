

import React from 'react'
import {Headers} from './Components/headers/Headers'
import {Nav} from './Components/nav/Nav'
import {About} from './Components/about/About'
import {Experience} from './Components/experience/Experience'
import {Services} from './Components/services/Services'
import {Portfolio} from './Components/portfolio/Portfolio'
import {Testimonials} from './Components/testimonials/Testimonials'
import {Contact} from './Components/contact/Contact'
import {Footer} from './Components/footer/Footer'


export const App = ()=>{
    return(
        <>
        <Headers />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        </>

    )
}