import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import Heading from "./Heading";
import { Slide } from "react-awesome-reveal";

const topBarData = [
  {
    icon: <FaPhoneAlt />,
    text: "+61469858262",
    label: "call us:",
    link: "tel:+61469858262",
    color: "bg-blue-500",
  },
  {
    icon: <AiOutlineMail />,
    text: "pankajanwar1989@gmail.com",
    label: "email us:",
    link: "mailto:pankajanwar1989@gmail.com",
    color: "bg-green-500",
  },
  {
    icon: <GoLocation />,
    text: "79 Bolwarra drive,Marsden Park  NSW 2765",
    label: "address:",
    color: "bg-red-500",
  },
  {
    icon: <BiTime />,
    label: "opening hours:",
    text: "8am - 6pm | mon - fri",

    color: "bg-yellow-500",
  },
];
const Contact = () => {
  return (
    <div
      id="contact"
      className=" w-full min-h-[400px] my-20 py-20 flex-center flex-col bg-violet-500"
    >
      <Heading title="contact us" />
      <div className="w-[95%] max-w-[1420px] min-h-[400px]  flex flex-col flex-wrap items-center justify-center md:flex-row">
        {/* left div */}
        <div className="group flex-1 w-full min-w-[300px] h-full flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-cyan-950 py-8 md:py-[2.1rem] px-1">
          {topBarData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[90%] sm:w-48 md:w-[300px] h-44 items-center text-center justify-center bg-slate-100 px-4 rounded-md "
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full text-white ${item.color} text-4xl`}
              >
                {item.icon}
              </div>
              <h3 className="my-2 font-bold">{item.label}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-lg sm:text-sm md:text-lg hover:text-blue-700 hover:underline"
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-lg sm:text-sm md:text-lg">
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* left div */}
        {/* right div */}
        <div className="flex-1 w-full">
          <Slide direction="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.7412509274586!2d150.81114461256874!3d-33.68976350969864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129c8a0df3c75d%3A0x9a05dcf5e58c1a0d!2s79%20Bolwarra%20Dr%2C%20Marsden%20Park%20NSW%202765!5e0!3m2!1sen!2sau!4v1690462031156!5m2!1sen!2sau"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full min-h-[400px] rounded-r-lg"
            ></iframe>
          </Slide>
        </div>
        {/* right div */}
      </div>
    </div>
  );
};

export default Contact;
