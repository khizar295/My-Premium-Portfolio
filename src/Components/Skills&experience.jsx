import React from "react";

export default function Skillsexperience() {
  return (
    <div
      id="experience"
      className="flex flex-col lg:flex-row items-start p-[30px] font-sans"
    >
      <div className="flex-1 mt-[150px] sm:mt-[50px] sm:ml-[110px] md:mt-[50px] md:ml-[110px]">
        <button className="relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
          Experience
        </button>
        <h1 className="text-[55px] font-bold leading-[1.2] text-[#111] sm:text-[36px] md:text-[44px] sm:text-left md:text-left">
          Skills and Experience
        </h1>
        <p className="mt-[20px] text-[18px] leading-[1.6] text-[#444] sm:text-left md:text-left">
          I design and build digital experiences for businesses of all <br />{" "}
          sizes, specializing in crafting elegant, modern websites, web <br />{" "}
          solutions and professional online stores.
        </p>
      </div>

      <div className="flex-1 mt-[60px] sm:mt-[40px] md:mt-[50px] sm:ml-[110px] md:ml-[110px]">
        <h1 className="text-[28px] font-bold mb-[20px] sm:text-left md:text-left">
          Experience
        </h1>

        <div>
          <div className="flex justify-between items-start my-[20px] transition-all duration-500 sm:flex-col sm:items-center sm:text-center md:flex-row md:text-left">
            <div className="w-[40%] text-[16px] font-bold text-black sm:w-full md:w-[40%]">
              Feb 2022 - June 2025
            </div>
            <div className="w-[55%] sm:w-full md:w-[55%]">
              <h4 className="m-0 text-[18px] font-bold text-black">
                Html, CSS, JS Developer
              </h4>
              <p className="mt-[5px] text-[14px] text-[#666]">
                Skills Up, Bahawalpur, Punjab, Pakistan
              </p>
            </div>
          </div>
          <hr className="border-t-2 border-black my-[10px]" />
        </div>

        <div>
          <div className="flex justify-between items-start my-[20px] transition-all duration-500 sm:flex-col sm:items-center sm:text-center md:flex-row md:text-left">
            <div className="w-[40%] text-[16px] font-bold text-black sm:w-full md:w-[40%]">
              June 2023 - August 2025
            </div>
            <div className="w-[55%] sm:w-full md:w-[55%]">
              <h4 className="m-0 text-[18px] font-bold text-black">
                Front-End Web Developer
              </h4>
              <p className="mt-[5px] text-[14px] text-[#666]">
                Code Lab, Bahawalpur, Punjab, Pakistan
              </p>
            </div>
          </div>
          <hr className="border-t-2 border-black my-[10px]" />
        </div>

        <div>
          <div className="flex justify-between items-start my-[20px] transition-all duration-500 sm:flex-col sm:items-center sm:text-center md:flex-row md:text-left">
            <div className="w-[40%] text-[16px] font-bold text-black sm:w-full md:w-[40%]">
              May 2025 - July 2025
            </div>
            <div className="w-[55%] sm:w-full md:w-[55%]">
              <h4 className="m-0 text-[18px] font-bold text-black">
                React Developer
              </h4>
              <p className="mt-[5px] text-[14px] text-[#666]">
                HexaLogix, Lodhran, Punjab, Pakistan
              </p>
            </div>
          </div>
          <hr className="border-t-2 border-black my-[10px]" />
        </div>

        <div>
          <div className="flex justify-between items-start my-[20px] transition-all duration-500 sm:flex-col sm:items-center sm:text-center md:flex-row md:text-left">
            <div className="w-[40%] text-[16px] font-bold text-black sm:w-full md:w-[40%]">
              June 2025 - Present
            </div>
            <div className="w-[55%] sm:w-full md:w-[55%]">
              <h4 className="m-0 text-[18px] font-bold text-black">
                Front-End Web Developer
              </h4>
              <p className="mt-[5px] text-[14px] text-[#666]">
                Codings Frist, Bahawalpur, Punjab, Pakistan
              </p>
            </div>
          </div>
          <hr className="border-t-2 border-black my-[10px]" />
        </div>
      </div>
    </div>
  );
}
