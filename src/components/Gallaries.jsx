import React, { useState } from "react";

import Heading from "./Heading";
import picturesData from "../assets/data/galleriesData";
import Pagination from "./Pagination";

const Gallaries = () => {
  const [pictures, setPictures] = useState(picturesData);

  const picturesPerPage = 6;
  return (
    <div
      id="gallery"
      className="w-full min-h-[400px] my-20 flex-center flex-col "
    >
      <Heading title="gallery" />
      <div className=" max-width flex-center flex-wrap ">
        <Pagination pictures={pictures} picturesPerPage={picturesPerPage} />
      </div>
    </div>
  );
};

export default Gallaries;
