import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Slide } from "react-awesome-reveal";
import { gallery21, gallery22, gallery23, gallery24 } from "../assets";

const data = [
  {
    id: 1,
    title: "welcome to ",
    span: "Love 'N' care",
    info: "At Love 'n' care, we take pride in offering a safe and supportive environment where children can learn, grow, and play together.Our experienced caregivers are dedicated to nurturing your child's development and creating unforgettable memories.",
    image: gallery22,
  },
  {
    id: 2,
    title: "Discover a Loving and Nurturing ",
    span: "Family Day Care",
    info: "Our family day care center is built on the foundation of love and care. We believe that every child is unique, and our team works diligently to foster their individuality through interactive activities and educational programs. Join us in this journey of exploration and discovery!",
    image: gallery23,
  },
  {
    id: 3,
    title: "Enriching Childhoods: Your Trusted",
    span: "Family Day Care",
    info: "As a trusted name in family day care, we strive to enrich childhoods by providing a warm and welcoming environment. With a focus on education, creativity, and play, we ensure that your child's early years are filled with joy, laughter, and learning.",
    image: gallery24,
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
    <div
      id="home"
      className="relative  w-full h-[calc(100vh-9rem)]  md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50"
    >
      {/* TEXT CONTAINER */}
      <div className="w-full h-full relative">
        <img
          src={data[currentSlide].image}
          alt=""
          className="object-cover w-full h-full "
        />
      </div>

      <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center  flex-col gap-8 text-white font-bold bg-gradient-to-r from-indigo-700">
        <div className="px-2 w-[95%] max-w-[1420px] ">
          <h1 className="md:max-w-[1000px] text-[2rem] leading-8 uppercase  md:text-5xl xl:text-6xl">
            {data[currentSlide].title}
            <span className="text-red-500">{data[currentSlide].span}</span>
          </h1>

          <p className="max-w-[800px]  my-14 leading-7 text-[16px] font-normal md:font-medium">
            {data[currentSlide].info}
          </p>
          <Button title="Enquire Now" />
        </div>
      </div>
      {/* IMAGE CONTAINER */}
    </div>
  );
};

export default Slider;
