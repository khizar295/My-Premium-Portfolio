import React from "react";
import { CiMobile2, CiGlobe, CiRouter, CiLaptop } from "react-icons/ci";
import { SiAffinitydesigner } from "react-icons/si";
import { FiTriangle } from "react-icons/fi";

export default function Services() {
  return (
    <div className="w-full h-auto p-3 bg-[blanchedalmond] overflow-x-hidden mt-15">
       <button className=" text-black font-bold px-6 py-2 border-2 border-black transform rotate-[-13deg] transition-all duration-300 hover:bg-black/20 active:scale-95">
          Services
        </button>
      <div className="row">
        <h1 className="ml-[25px] text-[60px] font-[650] pt-7">
          Services I Offer
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around mt-3">
        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-1000 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">01</h1>
          <h4 className="font-[650]">Website design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti <br /> voluptates.
          </p>
          <CiMobile2 className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">02</h1>
          <h4 className="font-[650]">Website Development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti odit <br /> voluptates.
          </p>
          <CiLaptop className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">03</h1>
          <h4 className="font-[650]">Pixel Perfect Elements</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti <br /> voluptates.
          </p>
          <FiTriangle className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">04</h1>
          <h4 className="font-[650]">Responsiveness</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti <br /> voluptates.
          </p>
          <SiAffinitydesigner className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">05</h1>
          <h4 className="font-[650]">UI/UX Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti odit <br /> voluptates.
          </p>
          <CiRouter className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">06</h1>
          <h4 className="font-[650]">Logic into Reality</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Dignissimos velit at cum <br /> illum accusantium deserunt fuga
            corrupti <br /> voluptates.
          </p>
          <CiGlobe className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>
      </div>
    </div>
  );
}
