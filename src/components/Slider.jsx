import React, { useEffect, useState } from "react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const data = [
  {
    id: 1,
    title:
      "We emphasize social, emotional, and intellectual development to develop children’s desire to be life–long learners.",
    image: slide1,
  },
  {
    id: 2,
    title:
      "We focus on a whole-child approach to early learning supporting social, emotional and physical growth.",
    image: slide2,
  },
  {
    id: 3,
    title:
      "We provide your child with an atmosphere of love conducive to creative play and exploration",
    image: slide3,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-12rem)] md:h-[calc(100vh-12rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="w-full  relative">
        <img
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover w-screen h-screen "
        />
      </div>

      <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center flex-col gap-8 text-white font-bold">
        <h1 className=" max-w-[1000px] text-3xl text-center uppercase p-4 md:p-10 md:text-3xl xl:text-4xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white text-xl font-bold py-4 px-8">
          Enquire Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
    </div>
  );
};

export default Slider;
