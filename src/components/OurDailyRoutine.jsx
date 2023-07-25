import React from "react";

const items = [
  {
    id: 1,
    time: "07:00 - 7:30am",
    label: "day care children arrive and enjoy with toys",
  },
  {
    id: 2,
    time: "07:30 - 8:00am",
    label: "breakfast",
  },
  {
    id: 3,
    time: "08:00 - 8:15am",
    label: "nappy changing",
  },
  {
    id: 4,
    time: "08:15 - 8:30am",
    label: "morning circle time: Greet each other and story reading",
  },
  {
    id: 5,
    time: "08:00 - 8:30am",
    label: "free indoor play",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
  {
    id: 6,
    time: "09:00 - 9:30am",
    label: "morning tea",
  },
];

const OurDailyRoutine = () => {
  return (
    <div className="w-full min-h-[600px] my-20 py-6 bg-slate-300 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-20">Our daily routine</h1>
      <div className="container w-[95%] max-w-[1420px] min-h-[500px]  ">
        <ul className="flex items-center justify-center flex-wrap gap-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 bg-green-500 w-full md:w-[600px] h-[60px] rounded-md"
            >
              <span className="bg-orange-400 flex items-center font-bold h-full px-2 w-[140px]">
                {item.time}
              </span>
              <span className="pr-1 font-bold text-xs md:text-lg ">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurDailyRoutine;
