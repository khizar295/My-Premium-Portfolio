import React from "react";
import img1 from "../assets/cartoon-1.jpg";
import img2 from "../assets/cartoon-2.png";
import img3 from "../assets/cartoon-3.jpg";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
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
    <div className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                Testimonials
              </button>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Client's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Kind Words</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-md"></div>
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 flex items-center justify-center">
                      <FaQuoteLeft className="text-amber-600 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Client Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative group/image">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-full blur-xl group-hover/image:blur-2xl transition-all duration-500"></div>
                    <img
                      src={item.img}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md group-hover/image:scale-105 transition-transform duration-500"
                      alt={item.name}
                    />
                  </div>
                </div>

                {/* Feedback */}
                <div className="text-center mb-5">
                  <p className="text-stone-600 text-sm leading-relaxed italic">
                    "{item.feedback}"
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-amber-200 to-rose-200 mx-auto mb-4"></div>

                {/* Client Info */}
                <div className="text-center">
                  <h5 className="font-display font-semibold text-stone-800 text-lg mb-1">
                    {item.name}
                  </h5>
                  <p className="text-stone-500 text-xs font-medium tracking-wide">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Rating Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-stone-100">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-stone-500 text-xs">Rated 5.0 by all clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}