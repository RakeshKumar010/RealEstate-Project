import { LuBadgeCheck } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { useContext } from "react";
import { Mycontext } from "../App";

const PopUp = ({setPopUpShow}) => {
const {pupUpHeading}=useContext(Mycontext)
  return (
    <div  className="w-full border-2 backdrop-blur-sm fixed z-30 rounded-xl  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-700/90 bg-gray-500/90 p-4 md:w-[40vw]">
      <ImCancelCircle onClick={()=>{
        setPopUpShow(false)
      }} className="text-white hover:text-custom-orange text-2xl absolute top-0 cursor-pointer right-0" />
      <h1 data-aos="fade-left" className="text-center text-4xl font-bold text-custom-orange shadow-2xl">
       {pupUpHeading}
      </h1>
      <p className="text-center text-white">
        Registation Here And Avail The Best Offer
      </p>
      <form className="flex flex-col">
        <input type="text" className="p-4 bg-transparent  dark:placeholder:text-gray-400 placeholder:text-gray-100" placeholder="Name" />
        <input
          type="number"
          className="p-4 bg-transparent  dark:placeholder:text-gray-400 placeholder:text-gray-100 "
          placeholder="Mobile No."
        />
        <input
          type="text"
          className="p-4 bg-transparent  dark:placeholder:text-gray-400 placeholder:text-gray-100"
          placeholder="E-Mail Address"
        />
        <button  className="bg-custom-orange p-4 mt-1 text-white rounded-md  hover:shadow-2xl">
          Pre-Register Now
        </button>
      </form>
      <div className="mt-2" >
        <div className="flex gap-1 text-custom-orange items-center font-semibold">
          <LuBadgeCheck />
          <p>Available Units</p>
        </div>
        <div className="flex gap-1 text-custom-orange items-center font-semibold">
          <LuBadgeCheck />
          <p>Payment Plan</p>
        </div>
        <div className="flex gap-1 text-custom-orange items-center font-semibold">
          <LuBadgeCheck />
          <p>Floor Plan</p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
