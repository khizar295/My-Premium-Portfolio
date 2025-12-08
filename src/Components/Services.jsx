import React from "react";
import { CiMobile2, CiGlobe, CiRouter, CiLaptop } from "react-icons/ci";
import { SiAffinitydesigner } from "react-icons/si";
import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full h-auto bg-[blanchedalmond] overflow-x-hidden mt-15 p-2 pt-4 pb-4"
    >
      <button className="montserrat relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
        Services
      </button>

      <div className="row">
        <h1 className="text-[60px] font-[650] pt-7 montserrat">
          Services I Offer
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around mt-3">
        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-1000 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">01</h1>
          <h4 className="font-[650] montserrat2">Website Design</h4>
          <p className="lato-regular">
            I create visually appealing, user-friendly, and <br /> fully
            responsive website designs that <br /> combine modern aesthetics
            with seamless <br /> functionality to enhance user experience.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-10">
            <CiMobile2 className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 0 }}
              className="px-4 py-2 bg-orange-500 text-black text-sm montserrat rounded hover:bg-orange-600 transition-colors font-bold duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">02</h1>
          <h4 className="font-[650] montserrat2">Website Development</h4>
          <p className="lato-regular">
            I build high-performance, secure, and <br /> scalable websites using
            modern <br /> technologies, ensuring smooth functionality, <br />
            fast loading speeds, and seamless user experience.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-10">
            <CiLaptop className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 1 }}
              className="px-4 py-2 bg-orange-500 text-black text-sm montserrat rounded hover:bg-orange-600 transition-colors font-bold duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">03</h1>
          <h4 className="font-[650] montserrat2">Pixel Perfect Elements</h4>
          <p className="lato-regular">
            I design every interface with precision and <br /> attention to
            detail, ensuring each element <br /> aligns flawlessly for a clean,
            consistent, <br /> and professional visual experience.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-10">
            <FiTriangle className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 2 }}
              className="px-4 py-2 bg-orange-500 text-black text-sm montserrat rounded hover:bg-orange-600 transition-colors font-bold duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">04</h1>
          <h4 className="font-[650] montserrat2">Responsiveness</h4>
          <p className="lato-regular">
            I ensure every website adapts seamlessly <br /> to all screen sizes
            and devices, <br /> providing an optimal viewing experience <br />
            with smooth performance everywhere.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-10">
            <SiAffinitydesigner className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 3 }}
              className="px-4 py-2 bg-orange-500 text-black text-sm montserrat rounded hover:bg-orange-600 transition-colors font-bold duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">05</h1>
          <h4 className="font-[650] montserrat2">UI/UX Design</h4>
          <p className="lato-regular">
            I craft intuitive and engaging user interfaces <br /> that
            prioritize usability and aesthetics, <br /> delivering smooth
            navigation and <br /> meaningful user experiences.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-10">
            <CiRouter className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 4 }}
              className="px-4 py-2 bg-orange-500 text-black text-sm montserrat rounded hover:bg-orange-600 transition-colors font-bold duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white m-2 p-[35px] border-2 border-black transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[10px_10px_10px_black]">
          <h1 className="text-[60px] font-[700] montserrat">06</h1>
          <h4 className="font-[650] montserrat2">Logic into Reality</h4>
          <p className="lato-regular">
            I transform creative ideas and complex <br /> concepts into
            functional digital solutions, <br /> blending innovation with
            precision to <br /> bring every vision to life.
          </p>

          <div className="flex items-center gap-[5%] sm:gap-[20%] lg:gap-[40%] mt-11">
            <CiGlobe className="h-[70px] w-[70px] bg-orange-500 rounded-full p-[15px]" />
            <Link
              to="/service-detail"
              state={{ tab: 5 }}
              className="px-4 py-2 bg-orange-500 text-black font-bold text-sm montserrat rounded hover:bg-orange-600 transition-colors duration-300 text-decoration-none"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
