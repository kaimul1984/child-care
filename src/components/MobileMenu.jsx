import React from "react";
import navLinks from "../assets/data/mobileData";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div className="bg-red-500 text-white absolute left-0 top-20 w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
      {navLinks.map((item) => (
        <a
          href={item.link}
          key={item.id}
          className="text-white md:text-black md:font-bold md:text-lg text-3xl transition-all duration-[300] hover:scale-50 hover:underline"
          onClick={() => setOpen(false)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
