import React from "react";
import Heading from "./Heading";
import checked from "../assets/checked.svg";
import { Zoom } from "react-awesome-reveal";

const whyChooseUsData = [
  {
    word: ["Caring", "Nurturing", "Experienced"],
    description:
      "Our team of dedicated caregivers provides a caring and nurturing environment where your child can thrive. With years of experience, we are committed to your child's growth and development.",
  },
  {
    word: ["Safe", "Secure", "Home-like"],
    description:
      "Safety is our top priority. Our family day care center offers a secure and home-like atmosphere where your child feels comfortable and cared for, just like home.",
  },
  {
    word: ["Personalized", "Individualized", "Tailored"],
    description:
      "We understand that every child is unique. That's why our programs are personalized and tailored to meet each child's specific needs and interests, promoting their overall development.",
  },
  {
    word: ["Engaging", "Educational", "Fun-filled"],
    description:
      "Learning should be fun! Our engaging and educational activities ensure that your child has a blast while acquiring valuable skills and knowledge.",
  },
  {
    word: ["Supportive", "Communication", "Family-oriented"],
    description:
      "We value open communication and collaboration with parents. Our family-oriented approach ensures that you are an active participant in your child's journey with us.",
  },

  {
    word: ["Trustworthy", "Reliable", "Established"],
    description:
      "With a reputation for reliability and trustworthiness, our well-established family day care center provides a secure and loving environment for your child's early development.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className=" w-full min-h-[600px] my-20 py-8 flex-center flex-col  bg-[url('./assets/gallery22.jpg')] bg-no-repeat bg-cover bg-center">
      <Heading title="Why Choose Us" />
      <div className=" max-width min-h-[500px] flex-center gap-7 flex-wrap pb-8">
        {whyChooseUsData.map((data, index) => (
          <Zoom>
            <div
              key={index}
              className=" group w-96 h-60 bg-black opacity-80 rounded-lg relative overflow-hidden after:absolute after:w-full after:h-1 after:top-0 after:left-0 after:bg-red-700"
            >
              <div className="word-list w-full h-full flex flex-col items-center justify-center shadow-2xl">
                <div>
                  {data.word.map((word, wordIndex) => (
                    <div
                      key={wordIndex}
                      className=" flex items-center gap-4 mb-3"
                    >
                      <img src={checked} alt="checked" width={35} />

                      <h2 className="text-3xl font-bold  text-lime-600">
                        {word}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute w-full h-full px-4 bg-lime-500 transition-all left-[-400px] top-0 group-hover:left-0 ">
                <h3 className="w-full text-center font-bold text-red-600 underline text-2xl mt-6 mb-3">
                  {data.word[0]}
                </h3>
                <p className=" w-full max-h-max text-red-800 pl-4 leading-6 relative after:absolute after:w-[2px] after:h-full after:top-0 after:left-0 after:bg-red-800">
                  {data.description}
                </p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
