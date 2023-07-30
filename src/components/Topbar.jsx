import React, { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { Context } from "./context";

const Topbar = () => {
  const { show } = useContext(Context);

  // Array to store the top bar data
  const topBarData = [
    {
      icon: <FaPhoneAlt />,
      text: "+6146985862",
      link: "tel:+6146985862",
      color: "bg-blue-500",
    },
    {
      icon: <AiOutlineMail />,
      text: "pankajanwar1989@gmail.com",
      link: "mailto:pankajanwar1989@gmail.com",
      color: "bg-green-500",
    },
    {
      icon: <GoLocation />,
      text: "79 bolwarra drive, marsden park, nsw 2765",
      color: "bg-red-500",
    },
    {
      icon: <BiTime />,
      text: "8am - 6pm | man - fri",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div
      className={`fixed z-[999] w-full h-16 flex items-center justify-center bg-lime-300 ${
        show ? "top-0" : "top-[-100px]"
      }`}
    >
      <div className="w-[95%] max-w-[1420px] grid grid-flow-col overflow-x-scroll gap-4 snap-mandatory snap-x scroll-smooth">
        {topBarData.map((item, index) => (
          <div
            key={index}
            className="min-w-max flex-center pt-4 space-x-2 snap-center"
          >
            <div
              className={`w-8 h-8 flex-center rounded-full text-white ${item.color}`}
            >
              {item.icon}
            </div>
            {item.link ? (
              <a
                href={item.link}
                className="text-xs md:text-sm hover:text-blue-700 hover:underline"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-xs md:text-sm">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
