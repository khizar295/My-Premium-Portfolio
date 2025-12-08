import React from "react";
import img1 from "../assets/cartoon-1.jpg";
import img2 from "../assets/cartoon-2.png";
import img3 from "../assets/cartoon-3.jpg";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testinomials() {
  const array = [
    {
      img: img1,
      feedback:
        "Outstanding work! Delivered a clean, responsive, and modern front-end using HTML, CSS, JS, Bootstrap 5, Tailwind, and React. Highly professional, communicative, and exceeded expectations!",
      name: "Armendo Senra",
      position: "CEO at Web Solutions",
    },
    {
      img: img2,
      feedback:
        "Exceptional front-end developer! Delivered a pixel-perfect, responsive website using React, Tailwind, and Bootstrap. Great communication, attention to detail, and completed everything on time. Highly recommended!",
      name: "Sarah Johnson",
      position: "Marketing Manager at Creative Agency",
    },
    {
      img: img3,
      feedback:
        "Amazing experience working with him! Transformed my ideas into a stunning, fast, and user-friendly interface using HTML, CSS, JavaScript, and modern frameworks. Truly skilled and reliable!",
      name: "Michael Smith",
      position: "Product Manager at Tech Innovators",
    },
  ];
  return (
    <div className="w-full mt-15 overflow-x-hidden p-3">
      <button className="montserrat relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
        Testinomial
      </button>
      <div className="row">
        <h1 className="text-[60px] font-[650] pt-7 montserrat">
          Client's Kind Word
        </h1>
      </div>
      <div className="row">
        {array.map((item, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 mt-3 hover:scale-105 transform transition duration-300"
          >
            <div className="card h-100 text-center shadow-sm pt-3">
              <img
                src={item.img}
                className="card-img-top h-23 w-25 m-auto relative"
                alt={item.name}
              />
              <div className="ml-43 mt-19 bg-yellow-500 p-2 rounded-4xl absolute test-icon">
                <FaQuoteLeft />
              </div>
              <div className="card-body">
                <p className="card-text lato-regular">{item.feedback}</p>
                <h5 className="card-title mt-3 montserrat">{item.name}</h5>
                <p className="text-muted lato-regular">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
