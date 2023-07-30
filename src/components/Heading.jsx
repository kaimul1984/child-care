import React from "react";

const Heading = ({ title, color, font }) => {
  return (
    <h1
      className="text-5xl font-bold mb-16 pb-6 relative after z-50"
      style={{ color: color, fontSize: font }}
    >
      {title}
    </h1>
  );
};

export default Heading;
