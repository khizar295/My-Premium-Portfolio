import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/proj-1.png";
import img2 from "../assets/proj-2.png";
import img3 from "../assets/proj-3.png";
import img4 from "../assets/proj-4.png";
import img5 from "../assets/proj-5.png";
import img6 from "../assets/proj-6.png";
import img7 from "../assets/proj-7.png";
import img8 from "../assets/proj-8.png";
import img9 from "../assets/proj-9.png";
import img10 from "../assets/proj-10.png";
import img11 from "../assets/proj-11.png";
import img12 from "../assets/proj-12.png";

export default function Portfolio() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const ServiceCard = ({ title, text, img, routeTo }) => (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col w-full">
      {/* Image Container - Fixed with min-height and proper sizing */}
      <div className="relative w-full overflow-hidden bg-stone-100 flex-shrink-0">
        <div className="w-full h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 flex-1">
          <div className="flex-1 min-w-0">
            <h4 className="font-display font-semibold text-stone-800 text-base md:text-lg mb-2 truncate">
              {title}
            </h4>
            <p 
              className="text-stone-600 text-xs md:text-sm leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          </div>
          
          <button
            onClick={() => navigate(routeTo)}
            className="relative flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 group/btn hover:scale-110"
          >
            <FiArrowRight className="text-sm md:text-xl transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );

  const projects = [
    {
      title: "My Premium Portfolio",
      text: "Creative and responsive Portfolio built with React.JS.",
      img: img1,
      routeTo: "/project-1",
    },
    {
      title: "Systems Limited Website",
      text: "One of the Top 5 Software Houses in Pakistan 'Systems Limited's' Clone Website. (React.JS)",
      img: img2,
      routeTo: "/project-2",
    },
    {
      title: "Social Video Downloader",
      text: "You can download any video from Facebook, Instagram, TikTok and YouTube via Link. (React.JS)",
      img: img3,
      routeTo: "/project-3",
    },
    {
      title: "Portfolio to showcase Skills",
      text: "New Portfolio theme to showcase my grip on HTML, CSS, JavaScript & Bootstrap.",
      img: img4,
      routeTo: "/project-4",
    },
    {
      title: "Portfolio to showcase Skills",
      text: "New Portfolio theme to showcase my grip on HTML, CSS, JavaScript & Bootstrap.",
      img: img5,
      routeTo: "/project-5",
    },
    {
      title: "E-Shopping Store",
      text: "E-Commerce website with product listings, shopping cart, and checkout functionality.",
      img: img6,
      routeTo: "/project-6",
    },
    {
      title: "KCS - Courier Service",
      text: "Logistics and Courier Service website with tracking and delivery options. (React.JS)",
      img: img7,
      routeTo: "/project-7",
    },
    {
      title: "Offline Api's Handling",
      text: "Offline handling of Api's using Arrays and Local Storage. (React.JS)",
      img: img8,
      routeTo: "/project-8",
    },
    {
      title: "Email Template Design",
      text: "Responsive Email Template for all Email Clients for Dark/Light mode.",
      img: img9,
      routeTo: "/project-9",
    },
    {
      title: "Contact Form",
      text: "HTML and CSS based form with some essential fields.",
      img: img10,
      routeTo: "/project-10",
    },
    {
      title: "Color Switching Toggle",
      text: "Turn the Sun into Glowing Noon and vice versa.",
      img: img11,
      routeTo: "/project-11",
    },
    {
      title: "Card Routing",
      text: "Route to next page with previous and next buttons with specific number of cards showing on one page (React.JS)",
      img: img12,
      routeTo: "/project-12",
    },
  ];

  const projectsPerPage = 6;
  const startIndex = (page - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
    <div
      id="portfolio"
      className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-12 md:py-16 px-4 md:px-8 lg:px-16 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-5 md:px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-xs md:text-sm shadow-sm border border-stone-100">
                My Work
              </button>
            </div>
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-stone-800 mb-3 md:mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Projects</span>
          </h1>
          <p className="text-stone-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            A showcase of my recent work and creative endeavors
          </p>
        </div>

        {/* Projects Grid - Responsive columns with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 transition-all duration-500">
          {currentProjects.map((proj, i) => (
            <ServiceCard
              key={i}
              title={proj.title}
              text={proj.text}
              img={proj.img}
              routeTo={proj.routeTo}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-10 md:mt-12">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`group relative px-5 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              page === 1 
                ? "opacity-40 cursor-not-allowed text-stone-400" 
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            <span className="relative z-10">Previous</span>
            {page !== 1 && (
              <div className="absolute inset-0 bg-stone-100 rounded-full -z-0 group-hover:bg-stone-200 transition-colors duration-300"></div>
            )}
          </button>

          <div className="flex gap-2">
            {[1, 2].map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`h-2 w-2 md:h-2.5 md:w-2.5 rounded-full transition-all duration-300 ${
                  page === num 
                    ? "w-5 md:w-6 bg-gradient-to-r from-amber-500 to-rose-500" 
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={page === 2}
            className={`group relative px-5 md:px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
              page === 2 
                ? "opacity-40 cursor-not-allowed text-stone-400" 
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            <span className="relative z-10">Next</span>
            {page !== 2 && (
              <div className="absolute inset-0 bg-stone-100 rounded-full -z-0 group-hover:bg-stone-200 transition-colors duration-300"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}