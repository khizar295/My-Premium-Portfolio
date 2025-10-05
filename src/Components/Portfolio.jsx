import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import img1 from "../assets/proj-1.png";
import img2 from "../assets/proj-2.png";
import img3 from "../assets/proj-3.png";
import img4 from "../assets/proj-4.png";
import img5 from "../assets/proj-5.png";
import img6 from "../assets/proj-6.png";
import img8 from "../assets/proj-8.png";
import img9 from "../assets/proj-9.png";
import img10 from "../assets/proj-10.png";
import img11 from "../assets/proj-11.png";
import img12 from "../assets/proj-12.png";

export default function Services() {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const ServiceCard = ({ title, text, img, link }) => (
    <div className="bg-white m-2 border-2 border-black flex flex-col items-center w-full sm:w-auto transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
      <img
        src={img}
        alt={title}
        className="w-full h-[200px] object-cover mb-4 border border-black project-img"
      />
      <div className="flex items-center w-full justify-between p-[20px]">
        <div>
          <h4 className="font-[650] text-[20px]">{title}</h4>
          <p
            className="text-[15px]"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 text-black h-[50px] w-12 flex justify-center items-center text-xl rounded hover:bg-orange-500 transition-all duration-300"
        >
          <FiArrowRight className="text-3xl" />
        </a>
      </div>
    </div>
  );

  const projects = [
    {
      title: "My Premium Portfolio",
      text: "Creative and responsive Portfolio built <br/> with React.",
      img: img1,
      link: "https://khizar-rehman-portfolio.vercel.app/",
    },
    {
      title: "Systems Limited Website",
      text: "One of the Top 5 Software Houses in <br/> Pakistan 'Systems Limited's' Clone Website",
      img: img2,
      link: "https://khizar-system.vercel.app/",
    },
    {
      title: "Social Video Downloader",
      text: "You can download any video from <br/> Facebook, Instagram, TikTok and YouTube <br/> via Link.",
      img: img3,
      link: "https://social-video-downloader-theta.vercel.app/",
    },
    {
      title: "Portfolio to showcase Skills",
      text: "New Portfolio theme to showcase my <br/> grip on HTML, CSS, JavaScript & Bootstrap.",
      img: img4,
      link: "https://khizar-portfolio-2.vercel.app/",
    },
    {
      title: "Portfolio to showcase Skills",
      text: "New Portfolio theme to showcase my <br/> grip on HTML, CSS, JavaScript & Bootstrap.",
      img: img5,
      link: "https://khizar-portfolio-3.vercel.app/",
    },
    {
      title: "E-Shopping Store",
      text: "E-Commerce website with product listings, <br/> shopping cart, and checkout functionality.",
      img: img6,
      link: "https://e-shopping-store-phi.vercel.app/",
    },
    {
      title: "Education Platform",
      text: "E-learning portal with video and progress tracking.",
      img: "https://via.placeholder.com/300x200?text=Education",
      link: "https://example.com/education",
    },
    {
      title: "Offline Api's Handling",
      text: "Offline handling of Api's using <br/> Arrays and Local Storage.",
      img: img8,
      link: "https://offline-handling-of-apis.vercel.app/",
    },
    {
      title: "Email Template Design",
      text: "Responsive Email Template for all <br/> Email Clients for Dark/Light mode.",
      img: img9,
      link: "https://email-template-eight-nu.vercel.app/",
    },
    {
      title: "Contact Form",
      text: "HTML and CSS based form with <br/> some essential fields.",
      img: img10,
      link: "https://contact-form-lime-one.vercel.app/",
    },
    {
      title: "Color Switching Toggle",
      text: "Turn the Sun into Glowing Noon <br/> and vice versa.",
      img: img11,
      link: "https://day-night-five.vercel.app/",
    },
    {
      title: "Card Routing",
      text: "Route to next page with previous and next <br/> buttons with specific number of cards <br/> showing on one page using React Router.",
      img: img12,
      link: "https://show-cards-by-routing.vercel.app/",
    },
  ];

  const projectsPerPage = 6;
  const startIndex = (page - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

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
        {currentProjects.map((proj, i) => (
          <ServiceCard
            key={i}
            title={proj.title}
            text={proj.text}
            img={proj.img}
            link={proj.link}
          />
        ))}
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
