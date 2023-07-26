// import React from "react";
// import { FaPhoneAlt, FaLocationDot } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { BiTime } from "react-icons/bi";
// const Topbar = () => {
//   return (
//     <div className="w-full h-12 flex items-center justify-center">
//       <div className="w-[95%] max-w-[1420px] flex justify-between">
//         <div className="call">
//           <div className="icon">
//             <FaPhoneAlt />
//           </div>
//           <a href="">+6143257689</a>
//         </div>
//         <div className="email">
//           <div className="icon">
//             <div className="icon">
//               <FaPhoneAlt />
//             </div>
//             <a href="">example@gmail.com</a>

//           </div>
//         </div>
//         <div className="address">
//           <div className="icon">
//             <FaLocationDot />
//           </div>
//           <span>35 Marsden Park,nsw 2013</span>
//         </div>
//         <div className="time">
//           <div className="icon">
//             <BiTime />
//           </div>
//           Mon - Friday :8am -5pm
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Topbar = () => {
  // Array to store the top bar data
  const topBarData = [
    {
      icon: <FaPhoneAlt />,
      text: "+6143257689",
      link: "tel:+6143257689",
      color: "bg-blue-500",
    },
    {
      icon: <AiOutlineMail />,
      text: "example@gmail.com",
      link: "mailto:example@gmail.com",
      color: "bg-green-500",
    },
    {
      icon: <GoLocation />,
      text: "35 Marsden Park, NSW 2013",
      color: "bg-red-500",
    },
    {
      icon: <BiTime />,
      text: "Mon - Friday: 8am - 5pm",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="w-full min-h-20 py-6 flex items-center justify-center bg-white">
      <div className="w-[95%] max-w-[1420px] flex gap-6 flex-wrap justify-between items-center">
        {topBarData.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 justify-center"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${item.color}`}
            >
              {item.icon}
            </div>
            {item.link ? (
              <a href={item.link} className="text-sm">
                {item.text}
              </a>
            ) : (
              <span className="text-sm">{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
