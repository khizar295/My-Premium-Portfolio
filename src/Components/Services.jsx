import React from "react";
import { CiMobile2, CiGlobe, CiRouter, CiLaptop } from "react-icons/ci";
import { SiAffinitydesigner } from "react-icons/si";
import { FiTriangle } from "react-icons/fi";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full h-auto p-3 bg-[blanchedalmond] overflow-x-hidden mt-15 p-4"
    >
      <button className="relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
        Services
      </button>
      <div className="row">
        <h1 className="text-[60px] font-[650] pt-7">Services I Offer</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around mt-3">
        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-1000 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">01</h1>
          <h4 className="font-[650]">Website design</h4>
          <p>
            I create visually appealing, user-friendly, and <br /> fully
            responsive website designs that <br /> combine modern aesthetics
            with seamless <br /> functionality to enhance user experience.
          </p>
          <CiMobile2 className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px] mt-10" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">02</h1>
          <h4 className="font-[650]">Website Development</h4>
          <p>
            I build high-performance, secure, and <br /> scalable websites using
            modern <br /> technologies, ensuring smooth functionality, <br />{" "}
            fast loading speeds, and seamless user experience.
          </p>
          <CiLaptop className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">03</h1>
          <h4 className="font-[650]">Pixel Perfect Elements</h4>
          <p>
            I design every interface with precision and <br /> attention to
            detail, ensuring each element <br /> aligns flawlessly for a clean,
            consistent, <br /> and professional visual experience.
          </p>
          <FiTriangle className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px] mt-10" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">04</h1>
          <h4 className="font-[650]">Responsiveness</h4>
          <p>
            I ensure every website adapts seamlessly <br /> to all screen sizes
            and devices, <br /> providing an optimal viewing experience <br />{" "}
            with smooth performance everywhere.
          </p>
          <SiAffinitydesigner className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px] mt-10" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">05</h1>
          <h4 className="font-[650]">UI/UX Design</h4>
          <p>
            I craft intuitive and engaging user interfaces <br /> that
            prioritize usability and aesthetics, <br /> delivering smooth
            navigation and <br /> meaningful user experiences.
          </p>
          <CiRouter className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px] mt-10" />
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700]">06</h1>
          <h4 className="font-[650]">Logic into Reality</h4>
          <p>
            I transform creative ideas and complex <br /> concepts into
            functional digital solutions, <br /> blending innovation with
            precision to <br /> bring every vision to life.
          </p>
          <CiGlobe className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px] mt-11" />
        </div>
      </div>
    </div>
  );
}
