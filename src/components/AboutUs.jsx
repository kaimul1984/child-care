import React from "react";
import slide1 from "../assets/slide1.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-[700px] my-20 py-4 relative flex flex-wrap items-center justify-center ">
      <div className="w-[95%] max-w-[1420px] min-h-[500px] bg-slate-100 flex flex-wrap gap-5">
        <div className="left flex-1 bg-gray-700 min-w-[300px]">
          <img src={slide1} alt="slide" className="w-full h-full" />
        </div>
        <div className="right flex-1 p-8">
          <h3 className="text-lg font-bold text-orange-400">
            welcome to love n care
          </h3>
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
            sessions to imaginative play, we strive to create a stimulating and
            fun-filled atmosphere that fosters creativity, social skills, and
            cognitive growth. Our commitment to excellence extends to
            maintaining a hygienic and child-friendly facility, ensuring that
            your little ones thrive in a clean and comfortable setting.
          </p>
          <button className="p-3 bg-red-500 text-lg text-white font-bold rounded-md">
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
