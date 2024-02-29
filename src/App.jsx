import React, { createContext, useEffect, useRef } from 'react'
import Layout from './pages/Layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
export const Mycontext =createContext()
const App = () => {
  useEffect(()=>{
    Aos.init({duration:"1000"})
},[])
const home=useRef(null)
const about=useRef(null)
const project =useRef(null)
const amenities=useRef(null)
const price =useRef(null)
const virtual=useRef(null)
const contact=useRef(null)
  return (
    <Mycontext.Provider value={{home,about,project,amenities,price,virtual,contact}}>
    <Layout/>
   
    </Mycontext.Provider>
  )
}

export default App