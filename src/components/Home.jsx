import { useContext, useState } from "react";
import Banner from "../assets/images/homebanner.jpg";
import Banner2 from "../assets/images/homebanner2.jpg";
import Banner3 from "../assets/images/homebanner3.jpg";
import Banner4 from "../assets/images/homebanner4.jpg";
import { ImLocation2 } from "react-icons/im";
import { Mycontext } from "../App";
const Home = () => {
  const[imgUrl,setImgUrl]=useState(Banner)
  const[border,setBorder]=useState('Banner')
  const {home}=useContext(Mycontext)
  return (
    <div
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="h-[87vh] bg-cover bg-center transition-all delay-100 ease-linear"
      ref={home}
    >
      <div className="bg-gradient-to-r dark:from-gray-900 from-custom-orange/20 w-full h-full text-white flex flex-col justify-end ">
        <div className="flex justify-around flex-col gap-7 md:flex-row ml-4 md:ml-0 mb-10">
          <div>
            <p className="font-extrabold text-5xl">Premier Estates</p>
            <div className="flex items-center ">
              <ImLocation2 className="text-red-600 text-xl" />
              <p className="">Hadapsar, Pune, Maharashtra, India</p>
            </div>
          </div>
          <div className="flex gap-2 select-none">
            <img
              src={Banner}
              alt="ban..1"
              className={`w-[50px] h-[50px] rounded-full ${border=='Banner' ? "border-2 border-custom-orange" : ""}`}
              onClick={()=>{
                setImgUrl(Banner)
                setBorder('Banner')
              }}
            />
            <img
              src={Banner2}
              alt="ban..1"
          className={`w-[50px] h-[50px] rounded-full ${border=='Banner2' ? "border-2 border-custom-orange" : ""}`}
              onClick={()=>{
                setImgUrl(Banner2)
                setBorder('Banner2')
              }}
            />
            <img
              src={Banner3}
              alt="ban..1"
          className={`w-[50px] h-[50px] rounded-full ${border=='Banner3' ? "border-2 border-custom-orange" : ""}`}
              onClick={()=>{
                setImgUrl(Banner3)
                setBorder('Banner3')
              }}
            />
            <img
              src={Banner4}
              alt="ban..1"
          className={`w-[50px] h-[50px] rounded-full ${border=='Banner4' ? "border-2 border-custom-orange" : ""}`}
              onClick={()=>{
                setImgUrl(Banner4)
                setBorder('Banner4')
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
