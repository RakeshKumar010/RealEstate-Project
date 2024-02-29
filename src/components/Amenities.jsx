import React, { useContext } from "react";
import Ameni from "../assets/images/Ameni.jpg"
import Ameni1 from "../assets/images/Ameni-1.jpg"
import Ameni2 from "../assets/images/Ameni-2.jpg"
import Ameni3 from "../assets/images/Ameni-3.jpg"
import Ameni4 from "../assets/images/Ameni-4.jpg"
import Ameni5 from "../assets/images/Ameni-5.jpg"
import Ameni6 from "../assets/images/Ameni-6.jpg"
import Ameni7 from "../assets/images/Ameni-7.jpg"
import Ameni8 from "../assets/images/Ameni-8.jpg"
import Ameni9 from "../assets/images/Ameni-9.jpg"
import { Mycontext } from "../App";

const Amenities = () => {
  const {amenities}=useContext(Mycontext)
    const arrayObj = [
        {
            "image": Ameni,
            "amenities": "Swimming Pool"
        },
        {
            "image": Ameni1,
            "amenities": "Gym"
        },
        {
            "image": Ameni2,
            "amenities": "Clubhouse"
        },
        {
            "image": Ameni3,
            "amenities": "Children's Play Area"
        },
        {
            "image": Ameni4,
            "amenities": "CCTV Surveillance"
        },
        {
            "image": Ameni6,
            "amenities": "Elevator"
        },
        {
            "image": Ameni7,
            "amenities": "Parking"
        },
        {
            "image": Ameni8,
            "amenities": "Gas Pipeline"
        },
        {
            "image": Ameni9,
            "amenities": "Garden"
        },
       
    ];

  

  return (
    <div className="flex flex-col p-14 dark:bg-slate-800 " ref={amenities}>
      <div className="text-center mb-3 dark:text-white">
        <p className="md:text-4xl text-2xl font-bold text-custom-orange">
        Amenities
        </p>
   
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {arrayObj.map(({image,amenities}, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-t-lg"
              src={image}
              alt=""
            />
            <h2 className="text-center bg-gray-400/10 dark:text-white rounded-b-lg py-2">
               {amenities}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
