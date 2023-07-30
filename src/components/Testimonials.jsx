import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import { user } from "../assets";
import { Slide } from "react-awesome-reveal";

const data = [
  {
    id: 1,
    title: "Exceptional Attention To Detail ",
    info: "The caregivers here are meticulous and dedicated, providing a safe and nurturing environment for children to learn, grow, and play. Their attention to every detail ensures that children's development is nurtured in the best possible way.A fantastic choice for any parent seeking exceptional childcare services. Highly recommended!.",
    name: "amitab pal",
    bgColor: "bg-amber-300",
  },
  {
    id: 1,
    title: "loving and nurturing ",
    info: "Love 'n' care truly lives up to its name with their loving and nurturing approach towards children. The environment they create is filled with care and support, allowing children to flourish and build beautiful memories. It's heartwarming to see how the caregivers here genuinely care for each child's well-being and growth.",
    name: "anuradha patel",
    bgColor: "bg-green-500",
  },
  {
    id: 1,
    title: "reliable and trustworthy ",
    info: "When it comes to childcare, reliability and trustworthiness are paramount, and Love 'n' care excels in both aspects. Parents can have complete peace of mind knowing that their children are in safe hands. The caregivers are dedicated to providing the best care possible, ensuring children's needs are met with utmost reliability and trust.",
    name: "priti lotha",
    bgColor: "bg-cyan-400",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="testimonials"
      className=" w-full min-h-[350px] my-20 py-8  flex-center flex-col
    bg-[url('./assets/bg.jpg')] bg-center bg-cover bg-no-repeat relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:opacity-70

    "
    >
      <Heading title="what parents say" color="white" font="2rem" />

      <div className="max-width h-full flex-center z-50 relative ">
        <Slide>
          <article
            className={`max-w-[600px] rounded-lg text-center opacity-90 p-2 ${data[currentSlide].bgColor}`}
          >
            <h2 className="text-blue-600 flex-center text-sm">
              <span className="mx-4 text-4xl">&#8212;</span>
              {data[currentSlide].title}
              <span className="mx-4 text-4xl">&#8212;</span>
            </h2>
            <p className="my-4">{data[currentSlide].info}</p>
            <div className="flex items-center justify-center space-x-4">
              <img src={user} alt="user" className="w-10" />
              <div className="flex flex-col text-start">
                <h3>{data[currentSlide].name}</h3>
                <span className="font-thin text-xs">"parent"</span>
              </div>
            </div>
          </article>
        </Slide>
      </div>
    </div>
  );
};

export default Testimonials;
