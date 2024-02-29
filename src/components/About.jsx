import Logo from "../assets/logo.png";
import aboutbanner from "../assets/images/about-banner.jpg";
import { useContext } from "react";
import { Mycontext } from "../App";

const About = () => {
  const {about}=useContext(Mycontext)
  return (
    <div className="flex justify-evenly md:h-[80vh] dark:bg-slate-800  items-center flex-col-reverse md:flex-row " ref={about}>
      <div
        className="md:w-2/6 h-[50vh] w-full bg-cover md:h-[60vh]  "
        style={{ backgroundImage: `url(${aboutbanner})` }}
      >
        <div className="flex flex-wrap h-full justify-center items-center  ">
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Status</p>
            <p className="">Ongoinf Project</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Launch On</p>
            <p className="">28/12/2023</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Category</p>
            <p className="">Apartment</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Completion By</p>
            <p className="">31/12/2025</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Location</p>
            <p className="">Hadapsar, Pune, Maharashtra</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="text-custom-orange font-bold shadow-lg">Unit Types</p>
            <p className="">2,3 Bedrooms</p>
          </div>
          <div className="w-2/5  text-center">
            <p className="">+91 84793*****</p>
          </div>
        </div>
      </div>
      <div className="md:w-[45%] md:h-[60vh] flex flex-col justify-around dark:text-white items-center md:items-start mb-3">
        <img src={Logo} alt="logo.." className="w-52" />
        <p className="md:text-4xl text-2xl font-bold">About Premier Estates</p>
        <p className="text-center md:text-start">
          Our premium 2 & 3 BHK apartment project- SIGNATURE PRISTINE embodies
          the stature & grace claimed by nobility and the style & charm suited
          to modernity- without casting a financial blow that will weigh you
          down for eternity. So, now owing a home that is classy, modern &
          reasonably priced is possible. No wonder people are loving it so much!
          Premier Estates
        </p>
        <div className="flex items-end gap-1">
          <p className="underline text-custom-orange text-2xl font-semibold p-0">Read More </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
