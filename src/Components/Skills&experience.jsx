import React from "react";

export default function Skillsexperience() {
  const experiences = [
    {
      period: "Feb 2022 - June 2025",
      title: "Html, CSS, JS Developer",
      company: "Skills Up, Bahawalpur, Punjab, Pakistan"
    },
    {
      period: "June 2023 - August 2025",
      title: "Front-End Web Developer",
      company: "Code Lab, Bahawalpur, Punjab, Pakistan"
    },
    {
      period: "May 2025 - July 2025",
      title: "React Developer",
      company: "HexaLogix, Lodhran, Punjab, Pakistan"
    },
    {
      period: "June 2025 - Present",
      title: "Front-End Web Developer",
      company: "Codings Frist, Bahawalpur, Punjab, Pakistan"
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 82 },
    { name: "Responsive Design", level: 92 }
  ];

  return (
    <div
      id="experience"
      className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Skills & Header */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
                  <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                    My Journey
                  </button>
                </div>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
                Skills & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
                  Experience
                </span>
              </h1>
              
              <p className="text-stone-600 text-lg leading-relaxed">
                I design and build digital experiences for businesses of all sizes,
                specializing in crafting elegant, modern websites, web solutions
                and professional online stores.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="font-display text-2xl font-semibold text-stone-800 mb-6">
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-stone-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-stone-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="flex-1">
            <div className="relative">
              {/* Decorative timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-200 via-rose-200 to-amber-200 hidden md:block"></div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      
                      {/* Period */}
                      <div className="md:w-2/5 pl-0 md:pl-12">
                        <div className="inline-block md:block">
                          <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      {/* Details */}
                      <div className="md:w-3/5">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <h4 className="font-display text-lg font-semibold text-stone-800 mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-stone-500 text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connector line for mobile */}
                    {index < experiences.length - 1 && (
                      <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-amber-200 to-rose-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 p-5 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-600 text-sm">
                    Continuously learning and staying updated with the latest technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}