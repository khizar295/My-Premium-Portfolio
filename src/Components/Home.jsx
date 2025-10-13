import React from "react";
import Logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <div
      id="home"
      className="mt-[200px] flex flex-col md:flex-row w-full h-auto items-center justify-center home-container"
    >
      <div className="mt-[45px] text-section">
        <button className="relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
          Hello
        </button>

        <h1 className="text-[70px] font-[650] leading-tight mt-[50px] inline-block">
          I Have Design Experience
        </h1>
        <p className="text-[21px] font-[470] mt-2">
          I design and develop solutions for clients of all sizes, <br />
          specializing in crafting stylish, modern websites, <br /> web
          applications, and online stores.
        </p>
        <button className="bg-[rgb(84,84,231)] border-2 border-black font-bold text-white h-[60px] w-[130px] mt-6 hover:bg-black hover:text-white transition-colors duration-500">
          Let's Talk
        </button>
      </div>

      <div className="md:ml-[100px] mt-10 md:mt-0 image-section">
        <div className="group inline-block image-wrapper">
          <div className="border-2 border-black h-[35px] w-[370px] text-right pr-2 pt-[6px] transition-transform duration-300 ease-in-out group-hover:scale-105 window-header">
            <button className="h-[20px] w-[20px] rounded-full bg-red-500 mx-1 inline-block p-0 border-none"></button>
            <button className="h-[20px] w-[20px] rounded-full bg-yellow-400 mx-1 inline-block p-0 border-none"></button>
            <button className="h-[20px] w-[20px] rounded-full bg-green-500 mx-1 inline-block p-0 border-none"></button>
          </div>

          <div className="border-b-2 border-l-2 border-r-2 border-black w-[370px] max-w-full p-3 transition-transform duration-300 ease-in-out group-hover:scale-105 window-body">
            <img
              src={Logo}
              alt="logo"
              className="w-[320px] h-[400px] m-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-102 responsive-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
