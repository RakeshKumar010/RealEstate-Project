import { useState } from "react";
import Logo from "../assets/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
const NavBar = () => {
  const [menuTab, setMenuTab] = useState(true);
  const menuTabFun = () => {
    setMenuTab(!menuTab);
  };
  return (
    <div className="select-none  w-full fixed bg-gray-800/80 drop-shadow-xl ">
      <div className=" flex justify-between  items-center pr-2 ">
        <img src={Logo} alt="logo" className="w-[70px] md:w-28" />
        <div className="hidden text-white  md:flex gap-4 ">
          <p className="font-semibold  px-2 py-1 bg-custom-orange rounded-md">
            Home
          </p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">About</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Project</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Amenities</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Site & Floor </p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Price</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange"> Virtual Tour</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Contact Us</p>
        </div>
        <div className="hidden md:flex items-center text-white">
          <IoIosCall cla/>
        <p className=" font-semibold ">+91 89787**798</p>
        </div>
        <IoMenuOutline className="text-4xl md:hidden" onClick={menuTabFun} />
      </div>
      {menuTab ? null : (
        <div className="absolute flex flex-col justify-center items-center bg-orange-50 w-full py-4 gap-4 ">
          <p className="font-semibold  px-2 py-1 rounded-md transition-all delay-100 ease-linear  bg-custom-orange ">
            Home
          </p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">About</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Project</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Amenities</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Site & Floor </p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Price</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange"> Virtual Tour</p>
          <p className="font-semibold px-2 py-1 rounded-md transition-all delay-100 ease-linear hover:bg-custom-orange">Contact Us</p>
        </div>
      )}{" "}
    </div>
  );
};

export default NavBar;
