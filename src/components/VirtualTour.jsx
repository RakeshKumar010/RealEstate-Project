import VtImg1 from "../assets/images/homebanner3.jpg";
import VtImg2 from "../assets/images/homebanner4.jpg";
import VtGoggles from "../assets/images/goggles2.png";
import { useContext } from "react";
import { Mycontext } from "../App";

const VirtualTour = ({ setPopUpShow }) => {
  const { virtual } = useContext(Mycontext);
  return (
    <div className="md:p-14 dark:bg-slate-800 " ref={virtual}>
      <div className="text-center mb-3 dark:text-white">
        <p className="md:text-4xl text-2xl font-bold text-custom-orange">
          Virtual Tour
        </p>
      </div>

      <div className="flex justify-around relative pt-5 gap-2 ">
        <img
          data-aos={window.screen.width>500?"fade-right":"flip-up"}
          src={VtImg1}
          alt="..."
          className="w-[31vw] h-[30vw] -ml-[0.8vw] rounded-full "
        />
        <img
          data-aos="flip-up"
          src={VtGoggles}
          alt="..."
          className="absolute md:w-[86.5vw] w-full top-0 z-10 hidden lg:block "
        />
        <button
          className="absolute bottom-0 md:bottom-10 z-20 cursor-pointer md:w-32 md:h-32 w-20 h-20 rounded-full bg-blue-50 dark:bg-slate-800  text-custom-orange"
          style={{ boxShadow: "0 0 30px #ff931e" }}
          onClick={() => {
            setPopUpShow(true);
          }}
        >
          {" "}
          Click Here
        </button>
        <img
          data-aos={window.screen.width>500?"fade-left":"flip-up"}
          src={VtImg2}
          alt="..."
          className="w-[31vw] h-[31vw] -mt-[0.8vw] -ml-[2vw] rounded-full bg-black"
        />
      </div>
    </div>
  );
};

export default VirtualTour;
