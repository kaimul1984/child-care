import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaX } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import { Context } from "./context";
const navLinks = [
  {
    id: "home",
    title: "home",
    link: "home",
  },
  {
    id: "about",
    title: "about",
    link: "about",
  },
  {
    id: "gallery",
    title: "gallery",
    link: "gallery",
  },
  {
    id: "testimonials",
    title: "testimonials",
    link: "testimonials",
  },
  {
    id: "contact",
    title: "contact",
    link: "contact",
  },
];

const Navbar = () => {
  const { show, open, selected, setSelected, setOpen } = useContext(Context);
  return (
    <div
      className={`w-full h-20 bg-white border-b-[1px] flex-center z-[999] fixed transition-all duration-300 ${
        show ? "top-[64px]" : "top-0"
      }`}
    >
      <div className="max-width flex-between ">
        <div className="logo h-20 flex items-center">
          <img src="/logo.svg" alt="" className="w-24 h-full ml-[-20px]" />
          <span className="text-red-500 font-bold text-[1.5rem] ml-[-20px] md:text-4xl">
            love n care
          </span>
        </div>

        <div className=" hidden md:static md:w-max  md:flex max-md:items-center md:gap-10 md:justify-center md:h-full ">
          {navLinks.map((item, id) => (
            <Link
              to={item.link}
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
              key={item.id}
              className={`text-white  md:font-bold md:text-lg text-3xl transition-all duration-[300] hover:scale-110 hover:underline hover:text-lime-500 cursor-pointer ${
                selected === item.id ? "md:text-lime-500" : "md:text-black"
              }`}
              onClick={() => setSelected(item.id)}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">{open && <MobileMenu />}</div>

        <div className="bar w-14 h-14 bg-slate-600 flex items-center justify-center rounded-md md:hidden ">
          {!open ? (
            <FaBars
              className="text-2xl text-teal-50"
              onClick={() => setOpen(true)}
            />
          ) : (
            <FaX
              className="text-2xl text-teal-50"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
        <div className="hidden md:block">
          <Button title="Enrol Now" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
