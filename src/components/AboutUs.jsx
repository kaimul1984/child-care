import React from "react";
import Button from "./Button";
import { gallery1, gallery4, gallery5, gallery6, gallery7 } from "../assets";
import { Slide, Zoom } from "react-awesome-reveal";
const items = [
  {
    id: 1,
    image: gallery1,
    label: "qualified educator",
  },
  {
    id: 2,
    image: gallery4,
    label: "fully equipped",
  },
  {
    id: 3,
    image: gallery5,
    label: "indoor play",
  },
  {
    id: 4,
    image: gallery6,
    label: "outdoor play",
  },
  {
    id: 5,
    image: gallery7,
    label: "Academically Thriving",
  },
];

const AboutUs = () => {
  return (
    <div
      id="about"
      className=" w-full min-h-[700px] my-20 py-4 relative flex-center flex-wrap  "
    >
      <div className="max-width min-h-[500px] bg-slate-100 flex flex-wrap gap-5">
        <div className=" flex-1  min-w-[300px] min-h-[300px] relative">
          {items.map((src, index) => (
            <div key={src.id}>
              <img
                src={src.image}
                alt={`slide-${index + 1}`}
                className={`object-cover absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full p-1 ${
                  index === 2
                    ? "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                    : index < 2
                    ? "top-0"
                    : "bottom-0"
                } ${index % 2 === 0 ? "left-0" : "right-0"}`}
              />

              <div
                className={`absolute  w-[150px] h-[150px] md:w-[300px] md:h-[300px] flex-center rounded-full p-1 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:opacity-60 after:rounded-full ${
                  index === 2
                    ? "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                    : index < 2
                    ? "top-0"
                    : "bottom-0"
                } ${index % 2 === 0 ? "left-0" : "right-0"}`}
              >
                <h1 className="text-white font-bold text-center md:text-3xl z-50">
                  {src.label}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="right flex-1 p-8">
          <Slide direction="right">
            <h3 className="text-lg font-bold text-orange-400">about us</h3>
            <h2 className="text-2xl font-bold my-5">
              Your Trusted Partner For Comprehensive family day care Services.
            </h2>
            <p className="leading-7 mb-10">
              At Love 'n care', we take immense pride in being your trusted
              partner for comprehensive family day care services. Our mission is
              to provide a nurturing and safe environment where your child's
              well-being and development are our top priorities. With a team of
              experienced and caring professionals, we offer a wide range of
              enriching activities and educational programs that cater to each
              child's unique needs and interests. From interactive learning
              sessions to imaginative play, we strive to create a stimulating
              and fun-filled atmosphere that fosters creativity, social skills,
              and cognitive growth. Our commitment to excellence extends to
              maintaining a hygienic and child-friendly facility, ensuring that
              your little ones thrive in a clean and comfortable setting.
            </p>
            <a
              href="tel:+6146985862"
              className="bg-red-500 text-white text-xl font-bold py-4 px-8 rounded-md transition-all hover:bg-lime-500"
            >
              call us now
            </a>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
