import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
//import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gallery1 } from "../assets";
import { Fade, Zoom } from "react-awesome-reveal";
const Pagination = ({ pictures, picturesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const totalPages = Math.ceil(pictures.length / picturesPerPage); // 24/6 = 4
  const indexOfLastPicture = currentPage * picturesPerPage; // 1*6 = 6
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage; // 6 -6 =1

  const currentPictures = pictures.slice(
    indexOfFirstPicture,
    indexOfLastPicture
  ); //(1,6)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full flex-center flex-col ">
      {/* Display the pictures for the current page */}
      <div className=" max-width gallery flex-center flex-wrap  gap-8 mb-8">
        {currentPictures.map((picture, index) => (
          <Zoom>
            <img
              key={index}
              src={picture.src}
              alt={`Picture ${index + 1}`}
              className="w-full md:w-80 h-80 object-cover rounded-lg aspect-square "
              onClick={() => setOpen(true)}
            />
          </Zoom>
        ))}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentPictures}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails]}
        />
      </div>

      {/* Pagination controls */}
      <div className="pagination flex-center gap-4 md:gap-8 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="border p-2 rounded-md"
        >
          <FaChevronLeft />
        </button>
        {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}
        <div className="page-buttons">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={` w-[30px] h-[30px] mx-4 border-2 px-1 rounded-full ${
                currentPage === index + 1 ? "bg-lime-700 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="border p-2 rounded-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
