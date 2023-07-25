import React from "react";
import slide1 from "../assets/slide1.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-[700px] top-[100px] my-20 relative py-20  flex flex-wrap items-center justify-center">
      <div className="w-[95%] max-w-[1420px] min-h-[500px] bg-slate-100 flex flex-wrap gap-5">
        <div className="left flex-1 bg-gray-700 min-w-[300px]">
          <img src={slide1} alt="slide"  className="w-full h-full"/>
        </div>
        <div className="right flex-1 p-8">
          <h3 className="text-lg font-bold text-orange-400">welcome to love n care</h3>
          <h2 className="text-2xl font-bold my-5">
            Your Trusted Partner For Comprehensive family day care Services.
          </h2>
          <p className="leading-7 mb-10">
            With A Commitment To Excellence, We Go Above And Beyond To Ensure
            Your Property Thrives, Offering A Seamless Blend Of Management,
            Maintenance, Security, Concierge, Cleaning, Landscaping, And Pest
            Control Solutions. Trust Caloo Aus To Be Your Partner In Maintaining
            And Managing Your Property, Allowing You To Enjoy The Peace Of Mind
            That Comes With Knowing Your Investment Is In Capable Hands. At
            Caloo Aus, We Deliver The Following Values:As Property Owner, Owners Corporation Or Property Developer, Having A Great Building Manager In Place Is Essential To Build Trust, Community And Safety. The Last Thing You Need Is A Small Problem
          </p>
          <button className="p-3 bg-orange-400 text-lg font-bold rounded-md">Call Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
