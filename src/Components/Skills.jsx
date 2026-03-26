import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import profileImage from "../assets/hire-logo.jpg";
import { Link } from "react-router-dom";

export default function SkillsSection() {
  const skills = [
    { name: "HTML 5", icon: FaHtml5, color: "from-orange-500 to-orange-600" },
    { name: "CSS 3", icon: FaCss3Alt, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: AiOutlineJavaScript, color: "from-yellow-400 to-yellow-500" },
    { name: "React JS", icon: FaReact, color: "from-cyan-400 to-cyan-500" },
    { name: "Bootstrap 5", icon: FaBootstrap, color: "from-purple-500 to-purple-600" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "from-teal-400 to-teal-500" }
  ];

  return (
    <div id="skills" className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          {/* Skills Section */}
          <div className="w-full lg:w-2/3">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
                  <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                    My Expertise
                  </button>
                </div>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-3">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Skills</span>
              </h2>
              <p className="text-stone-600 text-lg">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-rose-200/50 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                        <IconComponent 
                          size={36} 
                          className="relative text-stone-700 group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <span className="font-display font-semibold text-stone-800 text-lg">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Profile Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 to-rose-200/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <img
                  src={profileImage}
                  alt="Khizar - Professional Web Developer"
                  className="relative rounded-full w-48 h-48 object-cover border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="font-display text-xl font-semibold text-stone-800 mb-2">
                Ready to Collaborate?
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Let's work together to create something amazing
              </p>
              <Link
                to="/hire"
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden text-decoration-none"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}