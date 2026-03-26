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
      <nav className="fixed top-0 left-0 flex justify-between items-center px-6 md:px-10 py-3 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <Link to="/" className="text-decoration-none text-black">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/50 to-rose-200/50 blur-md group-hover:blur-lg transition-all duration-500"></div>
              <img
                src={Logo}
                alt="Logo"
                className="navbar-logo w-11 h-11 rounded-full object-cover border border-stone-200 shadow-sm relative z-10"
              />
            </div>
            <h1 className="font-display text-xl font-semibold tracking-tight text-stone-800 mt-1">
              Khizar
            </h1>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
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
              className={`relative group list-none px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-amber-100 to-rose-100 text-stone-800"
                  : "hover:bg-stone-100 text-stone-600"
              }`}
              onClick={() => handleScrollTo(item.id)}
            >
              <span className="no-underline font-medium text-sm tracking-wide">
                {item.label}
              </span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"></span>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="hidden lg:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 text-decoration-none"
        >
          Contact Now
        </Link>

        <div
          className={`lg:hidden cursor-pointer transition-all duration-500 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <HiX className="w-6 h-6 text-stone-700" />
          ) : (
            <HiMenu className="w-6 h-6 text-stone-700" />
          )}
        </div>
      </nav>

      <div
        className="fixed top-[4.5rem] left-0 h-[2px] bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div
        className={`fixed left-0 w-full bg-white/95 backdrop-blur-lg border-t border-stone-100 flex flex-col items-center py-8 lg:hidden z-40 transition-all duration-500 ease-out ${
          isOpen
            ? "top-[4.5rem] opacity-100 translate-y-0"
            : "top-[4.5rem] opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-3 w-full max-w-xs">
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
              className={`w-full text-center list-none px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-amber-100 to-rose-100 text-stone-800 font-medium"
                  : "hover:bg-stone-100 text-stone-600"
              }`}
              onClick={() => handleScrollTo(item.id)}
            >
              <span className="no-underline text-sm tracking-wide">{item.label}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contactpage"
          onClick={() => handleScrollTo("contact")}
          className="flex lg:hidden items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 mt-6 w-40 ms-4 text-decoration-none"
        >
          Contact Now
        </Link>
      </div>
    </>
  );
}