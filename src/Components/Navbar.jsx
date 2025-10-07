import React, { useState, useEffect } from "react";
import Logo from "../assets/nav-logo.jpg";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

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
      {/* Navbar */}
      <nav className="fixed top-0 left-0 flex justify-between items-center px-[35px] pt-[10px] pb-0 border-b-2 border-black h-[15vh] w-full bg-white z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-logo w-[45px] h-[45px] border-2 border-black rounded-full object-cover"
          />

          <h1 className="mt-[2px] ml-[5px] font-normal">Khizar</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex mt-[15px]">
          {["HOME", "SERVICES", "SKILLS", "PORTFOLIO", "CONTACT"].map(
            (item, idx) => (
              <li
                key={idx}
                className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500"
              >
                <a href="#" className="no-underline text-black font-bold">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block bg-orange-500 h-[70%] w-[150px] border-2 border-black font-bold hover:bg-black hover:text-white transition-colors duration-500">
          Contact Now
        </button>

        {/* Mobile Toggle Button */}
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

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-[15vh] left-0 h-[3px] bg-orange-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 w-full bg-white border-t-2 border-black flex flex-col items-center py-6 md:hidden z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "top-[15vh] opacity-100 translate-y-0"
            : "top-[15vh] opacity-0 -translate-y-10 pointer-events-none"
        }`}
        style={{
          position: "fixed",
          height: "auto",
          overflowY: "hidden",
        }}
      >
        <ul className="flex flex-col items-center space-y-4">
          {["HOME", "SERVICES", "SKILLS", "PORTFOLIO", "CONTACT"].map(
            (item, idx) => (
              <li
                key={idx}
                className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px] transition-all duration-300"
              >
                <a
                  href="#"
                  className="no-underline text-black font-bold"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          className="mt-6 bg-orange-500 h-[70px] w-[150px] border-2 border-black font-bold hover:bg-black hover:text-white transition-colors duration-500"
          onClick={toggleMenu}
        >
          Contact Now
        </button>
      </div>
    </>
  );
}
