import { LuBadgeCheck } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";

const PopUp = ({setPopUpShow}) => {

  return (
    <div  className="w-full border-2 backdrop-blur-sm fixed z-20 rounded-xl  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-500/40 bg-gray-500/70 p-4 md:w-[40vw]">
      <ImCancelCircle onClick={()=>{
        setPopUpShow(false)
      }} className="text-white hover:text-custom-orange text-2xl absolute top-0 cursor-pointer right-0" />
      <h1 data-aos="fade-left" className="text-center text-4xl font-bold text-custom-orange shadow-2xl">
        Premier Estates
      </h1>
      <p className="text-center text-white">
        Registation Here And Avail The Best Offer
      </p>
      <div className="flex flex-col">
        <input type="text" className="p-4 bg-transparent" placeholder="Name" />
        <input
          type="number"
          className="p-4 bg-transparent"
          placeholder="Mobile No."
        />
        <input
          type="text"
          className="p-4 bg-transparent"
          placeholder="E-Mail Address"
        />
        <button  className="bg-custom-orange p-4 mt-1 text-white rounded-md  hover:shadow-2xl">
          Pre-Register Now
        </button>
      </div>
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
