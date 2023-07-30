import React from "react";

const Button = ({ title }) => {
  return (
    <a className="bg-red-500 text-white text-xl font-bold py-4 px-8 rounded-md transition-all hover:bg-lime-500">
      {title}
    </a>
  );
};

export default Button;
