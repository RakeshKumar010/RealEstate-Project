import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Price from "../components/Price";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import PopUp from "../components/PopUp";
import ScrollButton from "../components/ScrollButton";
import Amenities from "../components/Amenities";
import VirtualTour from "../components/VirtualTour";
import ModeChange from "../components/ModeChange";

const Layout = () => {
  const [pupUpShow, setPopUpShow] = useState(false);
  const [isDark,setIsdDark]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      
      setPopUpShow(true);
    }, 3000);
  }, []);
  return (
    <div className={`min-h-screen bg-blue-50 dark:bg-slate-800 ${isDark?'dark':''}`}>
      <NavBar />
      <Home />
      <ScrollButton/>
      <About />
      <Projects />
      <VirtualTour setPopUpShow={setPopUpShow}/>
      <Amenities/>
      <Price />
      <ContactUs />
      <Footer />
      {pupUpShow ? <PopUp setPopUpShow={setPopUpShow} /> : null}
      <ModeChange setIsdDark={setIsdDark} isDark={isDark}/>
    </div>
  );
};

export default Layout;
