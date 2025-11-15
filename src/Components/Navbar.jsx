import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/nav-logo.png";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "experience",
        "skills",
        "portfolio",
        "contact",
      ];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      });
      setActiveSection(current);

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
      <nav className="fixed top-0 left-0 flex justify-between items-center px-[35px] pt-[5px] pb-0 border-b-2 border-black h-[15vh] w-full bg-white z-50">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="navbar-logo w-[45px] h-[45px] border-2 border-black rounded-full object-cover"
          />
          <h1 className="montserrat mt-[2px] ml-[5px] font-normal">Khizar</h1>
        </div>

        {/* Desktop menu only (lg and above) */}
        <ul className="hidden lg:flex mt-[15px]">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "skills", label: "SKILLS" },
            { id: "portfolio", label: "PORTFOLIO" },
            { id: "contact", label: "CONTACT" },
          ].map((item) => (
            <li
              key={item.id}
              id={`nav-${item.id}`}
              className={`montserrat inline list-none mt-3 px-[20px] py-[5px] rounded-[20px] transition-colors duration-500 cursor-pointer ${
                activeSection === item.id
                  ? "bg-orange-500"
                  : "hover:bg-orange-500"
              }`}
              onClick={() => handleScrollTo(item.id)}
            >
              <span className="no-underline text-black font-bold">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Now button only */}
        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="montserrat hidden lg:flex items-center justify-center h-[70%] w-[150px] border-2 border-black font-bold bg-orange-500 text-black hover:bg-orange-600 hover:text-white transition-colors duration-500 cursor-pointer text-decoration-none"
        >
          Contact Now
        </Link>

        {/* Hamburger menu for tablet and mobile */}
        <div
          className={`lg:hidden cursor-pointer transition-transform duration-500 ${
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

      {/* Scroll progress bar */}
      <div
        className="fixed top-[15vh] left-0 h-[3px] bg-orange-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hamburger menu dropdown for tablet and mobile */}
      <div
        className={`fixed left-0 w-full bg-white border-t-2 border-black flex flex-col items-center py-6 lg:hidden z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? "top-[15vh] opacity-100 translate-y-0"
            : "top-[15vh] opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {[
            { id: "home", label: "HOME" },
            { id: "services", label: "SERVICES" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "skills", label: "SKILLS" },
            { id: "portfolio", label: "PORTFOLIO" },
            { id: "contact", label: "CONTACT" },
          ].map((item) => (
            <li
              key={item.id}
              className={`montserrat list-none px-[20px] py-[8px] hover:rounded-[20px] transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "bg-orange-500 rounded-[20px]"
                  : "hover:bg-orange-500"
              }`}
              onClick={() => handleScrollTo(item.id)}
            >
              <span className="no-underline text-black font-bold">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Hamburger menu Contact Now button (tablet & mobile) */}
        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="montserrat flex lg:hidden items-center justify-center h-[80%] w-[150px] border-2 border-black font-bold bg-orange-500 text-black hover:bg-orange-600 hover:text-white transition-colors duration-500 ms-8 cursor-pointer text-decoration-none mt-4"
        >
          Contact Now
        </Link>
      </div>
    </>
  );
}
