import { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { Mycontext } from "../App";
const NavBar = () => {
  const [menuTab, setMenuTab] = useState(true);
  const menuTabFun = () => {
    setMenuTab(!menuTab);
  };
  const [isStyle, setIsStyle] = useState("home");
  const topSpace = 100;
  const scrollToRef = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - topSpace,
      behavior: "smooth",
    });
  };
  const { home, about, project, amenities, price, virtual, contact } =
    useContext(Mycontext);
  return (
    <div className="select-none  w-full fixed z-30 dark:bg-gray-800/80 bg-blue-50/80 drop-shadow-xl ">
      <div className=" flex justify-between  items-center pr-2 ">
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] md:w-28 cursor-pointer"
          onClick={() => {
            scrollToRef(home);
            setIsStyle("home");
          }}
        />
        <div className="hidden dark:text-white  md:flex gap-4 ">
          <p
            className={`font-semibold  px-2 py-1 hover:bg-custom-orange rounded-md cursor-pointer ${
              isStyle == "home" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(home);
              setIsStyle("home");
            }}
          >
            Home
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "about" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(about);
              setIsStyle("about");
            }}
          >
            About
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "project" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(project);
              setIsStyle("project");
            }}
          >
            Project
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "amenities" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(amenities);
              setIsStyle("amenities");
            }}
          >
            Amenities
          </p>
          {/* <p className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${isStyle=='site'?'bg-custom-orange':''}`}>
            Site & Floor{" "}
          </p> */}
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "price" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(price);
              setIsStyle("price");
            }}
          >
            Price
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "virtual" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(virtual);
              setIsStyle("virtual");
            }}
          >
            {" "}
            Virtual Tour
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer  transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "contact" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(contact);
              setIsStyle("contact");
            }}
          >
            Contact Us
          </p>
        </div>
        <div className="hidden md:flex items-center dark:text-white">
          <IoIosCall cla />
          <p className=" font-semibold ">+91 89787**798</p>
        </div>
        <IoMenuOutline
          className="text-4xl dark:text-white md:hidden"
          onClick={menuTabFun}
        />
      </div>
      {menuTab ? null : (
        <div className="absolute flex flex-col justify-center items-center bg-orange-50 w-full py-4 gap-4 ">
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "home" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(home);
              setIsStyle("home");
              menuTabFun(true);
            }}
          >
            Home
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "about" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(about);
              setIsStyle("about");
              menuTabFun(true);
            }}
          >
            About
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "project" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(project);
              setIsStyle("project");
              menuTabFun(true);
            }}
          >
            Project
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "amenities" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(amenities);
              setIsStyle("amenities");
              menuTabFun(true);
            }}
          >
            Amenities
          </p>
          {/* <p className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${isStyle=='site'?'bg-custom-orange':''}`}  onClick={() => {
              scrollToRef(site);
              setIsStyle('site')
              menuTabFun(true)
            }}>
            Site & Floor{" "}
          </p> */}
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "price" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(price);
              setIsStyle("price");
              menuTabFun(true);
            }}
          >
            Price
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "virtual" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(virtual);
              setIsStyle("virtual");
              menuTabFun(true);
            }}
          >
            {" "}
            Virtual Tour
          </p>
          <p
            className={`font-semibold px-2 py-1 rounded-md cursor-pointer transition-all delay-100 ease-linear hover:bg-custom-orange ${
              isStyle == "contact" ? "bg-custom-orange" : ""
            }`}
            onClick={() => {
              scrollToRef(contact);
              setIsStyle("contact");
              menuTabFun(true);
            }}
          >
            Contact Us
          </p>
        </div>
      )}{" "}
    </div>
  );
};

export default NavBar;
