import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const ServiceCard = ({ title, text, img }) => (
  <div className="bg-white m-2 border-2 border-black flex flex-col items-center w-full sm:w-auto transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
    <img
      src={img}
      alt={title}
      className="w-full h-[200px] object-cover mb-4 border border-black project-img"
    />
    <div className="flex items-center w-full justify-between p-[20px]">
      <div>
        <h4 className="font-[650] text-[20px]">{title}</h4>
        <p className="text-[15px]">
          {text}
        </p>
      </div>
      <button className="bg-orange-600 text-black h-[50px] w-12 text-xl rounded px-[10px] py-1 rounded-full hover:bg-orange-500 transition-all duration-300">
        <FiArrowRight className="text-3xl" />
      </button>
    </div>
  </div>
);


  const page1Boxes = Array.from({ length: 6 }, (_, i) => (
    <ServiceCard
      key={i}
      title={`Project ${i + 1}`}
      text="I design visually appealing, modern, and user-friendly website interfaces."
      img="https://via.placeholder.com/300x200"
    />
  ));


  const page2Boxes = Array.from({ length: 6 }, (_, i) => (
    <ServiceCard
      key={i + 6}
      title={`Project ${i + 7}`}
      text="Clean code, creative UI, and professional-level responsive design."
      img="https://via.placeholder.com/300x200"
    />
  ));

  return (
    <div className="w-full h-auto p-3 bg-[blanchedalmond] overflow-x-hidden mt-15 relative">
      <button className="text-black font-bold px-6 py-2 border-2 border-black transform rotate-[-13deg] transition-all duration-300 hover:bg-black/20 active:scale-95">
        Portfolio
      </button>

      <div className="row">
        <h1 className="ml-[25px] text-[60px] font-[650] pt-7">
          Latest Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around mt-3 transition-all duration-700 ease-in-out">
        {page === 1 ? page1Boxes : page2Boxes}
      </div>


      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`px-4 py-2 border-2 border-black font-bold ${
            page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black/10"
          }`}
        >
          Previous
        </button>

        <div className="flex gap-2">
          <div
            className={`h-3 w-3 rounded-full ${
              page === 1 ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
          <div
            className={`h-3 w-3 rounded-full ${
              page === 2 ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        </div>

        <button
          onClick={handleNext}
          disabled={page === 2}
          className={`px-4 py-2 border-2 border-black font-bold ${
            page === 2 ? "opacity-40 cursor-not-allowed" : "hover:bg-black/10"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
