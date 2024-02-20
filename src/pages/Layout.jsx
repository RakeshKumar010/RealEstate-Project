import React from 'react'
import NavBar from '../components/NavBar'
import Price from '../components/Price'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Home from '../components/Home'
import About from '../components/About'
import ContactUs from '../components/ContactUs'

const Layout = () => {
  return (
    <div className='min-h-screen bg-blue-50 dark:bg-slate-800'>
    <NavBar/> 
    <Home/>
    <About/>
    <Projects/>
    <Price/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default Layout