import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import profileImage from "../assets/hire-logo.jpg";

export default function SkillsSection() {
  return (
    <div className="my-10 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="skill-card flex items-center border p-3 rounded">
              <FaHtml5 size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">HTML 5</span>
            </div>

            <div className="skill-card flex items-center border p-3 rounded">
              <FaCss3Alt size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">CSS 3</span>
            </div>

            <div className="skill-card flex items-center border p-3 rounded">
              <AiOutlineJavaScript size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">JavaScript</span>
            </div>

            <div className="skill-card flex items-center border p-3 rounded">
              <FaReact size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">React JS</span>
            </div>

            <div className="skill-card flex items-center border p-3 rounded">
              <FaBootstrap size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">Bootstrap 5</span>
            </div>

            <div className="skill-card flex items-center border p-3 rounded">
              <RiTailwindCssFill size={40} color="#5A4FCF" />
              <span className="ml-3 font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 text-center flex flex-col items-center justify-center mt-12">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full mb-4 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-2 border-2 border-black">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}
