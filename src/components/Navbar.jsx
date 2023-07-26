import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
const navLinks = [
  {
    id: "home",
    title: "home",
    link: "/",
  },
  {
    id: "about",
    title: "about",
    link: "#about",
  },
  {
    id: "gallery",
    title: "gallery",
    link: "#gallery",
  },
  {
    id: "testimonials",
    title: "testimonials",
    link: "#testimonials",
  },
  {
    id: "contact",
    title: "contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-20 bg-white flex items-center justify-center ">
      <div className="w-[95%] max-w-[1420px] flex items-center justify-between ">
        <div className="logo flex items-center">
          <img src="/logo.svg" alt="" className="w-24 h-20 ml-[-20px]" />
          <span className="text-red-500 font-bold text-[1.5rem] ml-[-20px] md:text-4xl">
            {" "}
            love n care
          </span>
        </div>

        <div className=" hidden md:static md:w-max  md:flex max-md:items-center md:gap-10 md:justify-center md:h-full ">
          {navLinks.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="text-white md:text-black md:font-bold md:text-lg text-3xl transition-all duration-[300] hover:scale-50 hover:underline"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {open && <MobileMenu setOpen={setOpen} />}
        </div>

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
        <button className="px-3 py-2 text-xl font-bold rounded-md bg-red-500 text-white hidden md:block">
          Enrol now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
