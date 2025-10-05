import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
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
      <nav className="fixed-top flex justify-between items-center px-[35px] pt-[10px] pb-0 border-b-2 border-black h-[15vh] w-full bg-white z-50">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-[35px] w-[35px] border-2 border-black rounded-full navbar-logo"
          />

          <h1 className="mt-[2px] ml-[5px] font-normal">Khizar</h1>
        </div>

        <ul className="hidden md:flex mt-[15px]">
          <li className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500">
            <a href="#" className="no-underline text-black font-bold home-btn">
              HOME
            </a>
          </li>
          <li className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500">
            <a href="#" className="no-underline text-black font-bold">
              SERVICES
            </a>
          </li>
          <li className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500">
            <a href="#" className="no-underline text-black font-bold">
              SKILLS
            </a>
          </li>
          <li className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500">
            <a href="#" className="no-underline text-black font-bold">
              PORTFOLIO
            </a>
          </li>
          <li className="inline list-none px-[20px] py-[8px] hover:bg-orange-500 rounded-[20px] transition-colors duration-500">
            <a href="#" className="no-underline text-black font-bold">
              CONTACT
            </a>
          </li>
        </ul>

        <button className="hidden md:block bg-orange-500 h-[70%] w-[150px] border-2 border-black font-bold hover:bg-black hover:text-white transition-colors duration-500">
          Contact Now
        </button>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <HiX className="w-8 h-8 text-black" />
          ) : (
            <HiMenu className="w-8 h-8 text-black" />
          )}
        </div>
      </nav>

      <div
        className="fixed top-[15vh] left-0 h-[3px] bg-orange-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {isOpen && (
        <div className="absolute top-[15vh] left-0 w-full bg-white border-t-2 border-black flex flex-col items-center py-6 md:hidden z-40">
          <ul className="flex flex-col items-center space-y-4">
            <li className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px]">
              <a
                href="#"
                className="no-underline text-black font-bold home-btn"
                onClick={toggleMenu}
              >
                HOME
              </a>
            </li>
            <li className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px]">
              <a
                href="#"
                className="no-underline text-black font-bold"
                onClick={toggleMenu}
              >
                SERVICES
              </a>
            </li>
            <li className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px]">
              <a
                href="#"
                className="no-underline text-black font-bold"
                onClick={toggleMenu}
              >
                SKILLS
              </a>
            </li>
            <li className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px]">
              <a
                href="#"
                className="no-underline text-black font-bold"
                onClick={toggleMenu}
              >
                PORTFOLIO
              </a>
            </li>
            <li className="list-none px-[20px] py-[8px] hover:bg-orange-500 hover:rounded-[20px]">
              <a
                href="#"
                className="no-underline text-black font-bold"
                onClick={toggleMenu}
              >
                CONTACT
              </a>
            </li>
          </ul>
          <button
            className="mt-6 bg-orange-500 h-[70px] w-[150px] border-2 border-black font-bold hover:bg-black hover:text-white"
            onClick={toggleMenu}
          >
            Contact Now
          </button>
        </div>
      )}
    </>
  );
}
