import React from "react";
import Logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <div className="mt-[200px] flex flex-col md:flex-row w-full h-auto items-center justify-center home-container">
      <div className="mt-[45px] text-section">
        <button className=" text-black font-bold px-6 py-2 border-2 border-black transform rotate-[-13deg] transition-all duration-300 hover:bg-black/20 active:scale-95">
          Hello
        </button>
        <h1 className="text-[70px] font-[650] leading-tight mt-[50px] inline-block">
          I Have Design Experience
        </h1>
        <p className="text-[21px] font-[470] mt-2">
          I design and develop services for customers of all sizes,
          specializing <br /> in creating stylish, modern websites, web
          services and online stores.
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
