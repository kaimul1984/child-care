import React, { useContext } from "react";
import navLinks from "../assets/data/mobileData";
import { Link } from "react-scroll";
import { Context } from "./context";

const MobileMenu = () => {
  const { selected, setSelected, setOpen } = useContext(Context);

  function todo(id) {
    setOpen(false);
    setSelected(id);
  }

  return (
    <div className="bg-red-500 cursor-pointer text-white absolute left-0 top-[80px] w-full h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
      {navLinks.map((item) => (
        <Link
          to={item.link}
          spy={true}
          smooth={true}
          offset={-100}
          duration={300}
          key={item.id}
          className={`text-3xl transition-all duration-[300]  ${
            selected === item.id ? "text-lime-500" : "text-white"
          }`}
          onClick={() => todo(item.id)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
