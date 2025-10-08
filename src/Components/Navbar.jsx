import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/nav-logo.jpg";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 flex justify-between items-center px-[35px] pt-[10px] pb-0 border-b-2 border-black h-[15vh] w-full bg-white z-50">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-logo w-[45px] h-[45px] border-2 border-black rounded-full object-cover"
          />
          <h1 className="mt-[2px] ml-[5px] font-normal">Khizar</h1>
        </div>

        <ul className="hidden md:flex mt-[15px]">
          <li
            id="nav-home"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("home")}
          >
            <span className="no-underline text-black font-bold">HOME</span>
          </li>
          <li
            id="nav-services"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("services")}
          >
            <span className="no-underline text-black font-bold">SERVICES</span>
          </li>
          <li
            id="nav-experience"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("experience")}
          >
            <span className="no-underline text-black font-bold">
              EXPERIENCE
            </span>
          </li>
          <li
            id="nav-skills"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("skills")}
          >
            <span className="no-underline text-black font-bold">SKILLS</span>
          </li>
          <li
            id="nav-portfolio"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("portfolio")}
          >
            <span className="no-underline text-black font-bold">PORTFOLIO</span>
          </li>
          <li
            id="nav-contact"
            className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500 cursor-pointer"
            onClick={() => handleScrollTo("contact")}
          >
            <span className="no-underline text-black font-bold">CONTACT</span>
          </li>
        </ul>

        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="hidden md:flex items-center justify-center h-[70%] w-[150px] border-2 border-black font-bold bg-orange-500 text-black hover:bg-orange-600 hover:text-white transition-colors duration-500 cursor-pointer text-decoration-none"
        >
          Contact Now
        </Link>

        <div
          className={`md:hidden cursor-pointer transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <HiX className="w-8 h-8 text-black transition-transform duration-500 scale-110" />
          ) : (
            <HiMenu className="w-8 h-8 text-black transition-transform duration-500 scale-100" />
          )}
        </div>
      </nav>

      <div
        className="fixed top-[15vh] left-0 h-[3px] bg-orange-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div
        className={`fixed left-0 w-full bg-white border-t-2 border-black flex flex-col items-center py-6 md:hidden z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "top-[15vh] opacity-100 translate-y-0"
            : "top-[15vh] opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("home")}
          >
            <span className="no-underline text-black font-bold">HOME</span>
          </li>
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("services")}
          >
            <span className="no-underline text-black font-bold">SERVICES</span>
          </li>
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("experience")}
          >
            <span className="no-underline text-black font-bold">
              EXPERIENCE
            </span>
          </li>
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("skills")}
          >
            <span className="no-underline text-black font-bold">SKILLS</span>
          </li>
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("portfolio")}
          >
            <span className="no-underline text-black font-bold">PORTFOLIO</span>
          </li>
          <li
            className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300 cursor-pointer"
            onClick={() => handleScrollTo("contact")}
          >
            <span className="no-underline text-black font-bold">CONTACT</span>
          </li>
        </ul>

        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="hidden md:flex items-center justify-center h-[70%] w-[150px] border-2 border-black font-bold bg-orange-500 text-black hover:bg-orange-600 hover:text-white transition-colors duration-500 cursor-pointer text-decoration-none"
        >
          Contact Now
        </Link>
      </div>
    </>
  );
}
