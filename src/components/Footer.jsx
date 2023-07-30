import React from "react";
import navLinks from "../assets/data/mobileData";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-black text-white flex-center flex-col">
      <div className="max-width h-full flex flex-col items-center gap-8 py-4">
        <div className="link flex gap-4 items-center ">
          {navLinks.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                key={item.id}
                className="cursor-pointer text-sm text-slate-400 md:text-lg transition-all hover:text-purple-600 hover:scale-110"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
      <div className="copyright text-center border-t-2 border-gray-700 w-full py-2">
        <span className="text-xs text-gray-500">
          copyRight©2023, Love 'n' Care. All Right Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
